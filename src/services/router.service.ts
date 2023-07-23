import { Controller } from 'interfaces/controller';
import eventBus from './event.service';
import { EventTypes } from 'types/event.enum';

export class Router {
  private routes: Record<string, Controller>;
  private currentPath: string;
  private container: HTMLDivElement;

  constructor(container: HTMLDivElement, routes: Record<string, Controller>) {
    this.container = container;
    this.routes = routes;
    this.currentPath = '';
    window.addEventListener('hashchange', this.onHashChange.bind(this));
  }

  private onHashChange() {
    this.navigateTo(`#${window.location.hash.slice(1)}`, false);
  }

  navigateTo(path: string, addHistory = true) {
    this.container.innerHTML = '';
    const route = this.routes[path];

    if (route) {
      if (addHistory) {
        window.location.hash = path;
      }

      this.currentPath = path;
      route.init();
      eventBus.publish(EventTypes.urlChanged, path);
    } else {
      global.console.error(`Path '${path}' is not registered in router`);
    }
  }
}
