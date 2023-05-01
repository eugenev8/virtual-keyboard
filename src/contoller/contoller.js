export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    window.addEventListener('load', () => {
      this.getData();
    });
  }

  setLanguage(lang) {
    this.model.toggleLanguage(lang);
    this.view.toggleLanguage(this.model.currentLanguage);
  }

  setVolume(volume) {
    this.model.soundVolume = volume;
    this.view.setVolume(volume);
  }

  handleEvent(event, lang) {
    this.view.handleKeyPress(event, lang);
  }

  saveData() {
    const data = {
      language: this.model.currentLanguage,
      background: this.view.isBackgroundActive,
    };
    localStorage.setItem('e8Keyboard', JSON.stringify(data));
  }

  getData() {
    const data = JSON.parse(localStorage.getItem('e8Keyboard'));
    if (data) {
      this.setLanguage(data.language);
      if (document.hidden) {
        this.view.isBackgroundActive = false;
      } else {
        this.view.isBackgroundActive = data.background;
      }
      this.view.toggleBackground();
    }
  }
}
