export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  setLanguage(lang) {
    this.model.toggleLanguage(lang);
    this.view.toggleLanguage(this.model.currentLanguage);
  }

  handleEvent(event, lang) {
    this.view.handleKeyPress(event, lang);
  }
}
