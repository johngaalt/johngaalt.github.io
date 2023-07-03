import { Editor } from 'components/Editor/Editor';
import { GameWrapper } from '../GameWrapper/GameWrapper';
import { Header } from '../Header/Header';
import { LevelDescription } from '../LevelDescription/LevelDescription';
import { Sidebar } from '../Sidebar/Sidebar';
import app from './App.html';
import { Footer } from 'components/Footer/Footer';
import { LevelList } from 'components/LevelList/LevelList';
import { Victory } from 'components/Victory/Victory';

export class App {
  private header: Header;
  private gameWrapper: GameWrapper;
  private sidebar: Sidebar;
  private footer: Footer;
  private victory: Victory;

  constructor() {
    this.header = new Header();
    this.gameWrapper = new GameWrapper();
    this.sidebar = new Sidebar();
    this.footer = new Footer();
    this.victory = new Victory();
  }

  attachListeners() {
    this.sidebar.closeLevelsMenuListener();
    this.sidebar.attachListeners();
    LevelDescription.showPreviousLevelListener();
    LevelDescription.showLevelsMenuListener();
    LevelDescription.showNextLevelListener();
    LevelDescription.helpButtonListener();
    Editor.changeInputValueListener();
    Editor.compareAnswerButtonListener();
    LevelList.resetGameListener();
  }

  render() {
    return app
      .replace('#HEADER#', this.header.render())
      .replace('#GAMEWRAPPER#', this.gameWrapper.render())
      .replace('#FOOTER#', this.footer.render('d-none d-lg-block'))
      .replace('#FOOTERSM#', this.footer.render('d-lg-none'))
      .replace('#VICTORY#', this.victory.render())
      .replace('#SIDEBAR#', this.sidebar.render());
  }
}
