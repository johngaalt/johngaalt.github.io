import { WinnersModel } from './winners.model';
import { WinnersView } from './winners.view';
import { HeadingsController } from 'components/headings/headings.controller';
import { HeadingsModel } from 'components/headings/headings.model';
import { HeadingsView } from 'components/headings/headings.view';
import { WinnersTableController } from 'components/winners-table/winners-table.controller';
import { WinnersTableModel } from 'components/winners-table/winners-table.model';
import { WinnersTableView } from 'components/winners-table/winners-table.view';
import { Controller } from 'interfaces/controller';

export class WinnersController implements Controller {
  model: WinnersModel;
  view: WinnersView;
  name = 'Winners';
  pageNumber = 1;
  headingsController: HeadingsController;
  winnersTable: WinnersTableController;

  constructor(model: WinnersModel, view: WinnersView) {
    this.model = model;
    this.view = view;

    this.headingsController = new HeadingsController(
      new HeadingsModel(),
      new HeadingsView(),
    );

    this.winnersTable = new WinnersTableController(
      new WinnersTableModel(),
      new WinnersTableView(),
    );
  }

  init() {
    this.view.render();
    this.headingsController.init('Winners', 10, 1, 7, '#winners');
  }
}
