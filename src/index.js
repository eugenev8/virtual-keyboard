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
  return 0;
});
document.addEventListener('keyup', (event) => {
  event.preventDefault();
  event.stopPropagation();
  app.handleEvent(event, app.model.currentLanguage);
  return 0;
});
