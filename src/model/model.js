export default class Model {
  constructor() {
    this.currentLanguage = 'en';
    this.soundVolume = 1;
  }

  toggleLanguage(lang) {
    if (lang === 'ru') {
      this.currentLanguage = 'ru';
    } else {
      this.currentLanguage = 'en';
    }
  }
}
