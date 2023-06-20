import './styles/main.scss';

import 'bootstrap-icons/font/bootstrap-icons.scss';

import { UI } from './modules/UI';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.initRender();
  ui.initListeners();
});
