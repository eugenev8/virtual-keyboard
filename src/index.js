import './styles.scss';
import Model from './model/model';
import View from './view/view';
import Controller from './contoller/contoller';

const app = new Controller(new Model(), new View());
const settingFromStorage = JSON.parse(localStorage.getItem('eugenevKeyboard')) || null;
if (settingFromStorage) {
  app.setLanguage(settingFromStorage.lang);
} else {
  app.setLanguage('en');
}

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  event.stopPropagation();
  app.handleEvent(event, app.model.currentLanguage);

  if ((event.key === 'Alt' && event.ctrlKey) || (event.key === 'Control' && event.altKey)) {
    if (app.model.currentLanguage === 'ru') {
      app.setLanguage('en');
      app.saveData();
      return 0;
    }
    app.setLanguage('ru');
    app.saveData();
  }
  return 0;
});
document.addEventListener('keyup', (event) => {
  event.preventDefault();
  event.stopPropagation();
  app.handleEvent(event, app.model.currentLanguage);
  return 0;
});
app.view.board.boardDOM.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  app.handleEvent(event, app.model.currentLanguage);
  return 0;
});
app.view.btnToggleSound_range.addEventListener('input', () => {
  app.setVolume(app.view.btnToggleSound_range.value);
});
app.view.btnToggleSound_range.addEventListener('change', () => {
  app.saveData();
});
app.view.btnToggleBackground_switch.addEventListener('change', () => {
  app.saveData();
});
app.view.btnToggleLanguage_switch.addEventListener('change', () => {
  if (app.view.btnToggleLanguage_switch.checked === true) {
    app.setLanguage('en');
  } else {
    app.setLanguage('ru');
  }
  app.saveData();
});
