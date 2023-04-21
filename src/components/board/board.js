import DOMUtils from '../DOM_Utils';
import Key from '../key/key';

export default class Board extends DOMUtils {
  constructor(allKeys) {
    super();
    this.isCapsLocked = false;
    const keys = allKeys;
    this.allKeys = [];
    keys.forEach((element) => {
      this.createKey(element);
    });
    this.lettersArray = this.allKeys.slice(15, 25)
      .concat(this.allKeys.slice(30, 39))
      .concat(this.allKeys.slice(43, 50));
    this.boardDOM = DOMUtils.createElement('div', 'keyboard');
    this.createRows();
  }

  returnBoard() {
    return this.boardDOM;
  }

  createRows() {
    const row1 = DOMUtils.createElement('div', 'keyboard__row');
    const row2 = DOMUtils.createElement('div', 'keyboard__row');
    const row3 = DOMUtils.createElement('div', 'keyboard__row');
    const row4 = DOMUtils.createElement('div', 'keyboard__row');
    const row5 = DOMUtils.createElement('div', 'keyboard__row');
    row1.append(...this.allKeys.slice(0, 14));
    row2.append(...this.allKeys.slice(14, 29));
    row3.append(...this.allKeys.slice(29, 42));
    row4.append(...this.allKeys.slice(42, 55));
    row5.append(...this.allKeys.slice(55, 64));
    this.boardDOM.append(row1, row2, row3, row4, row5);
  }

  createKey(element) {
    const newKey = new Key(element);
    this.allKeys.push(newKey);
  }

  setRuLanguage() {
    this.allKeys.forEach((elem) => {
      elem.setRuLanguage();
    });
  }

  setEnLanguage() {
    this.allKeys.forEach((elem) => {
      elem.setEnLanguage();
    });
  }

  handleKeyPress(event, lang) {
    this.setActiveKey(event);
    if (event.code === 'CapsLock' && event.type === 'keydown' && event.repeat === false) {
      this.handleCaps(event, lang);
    }
    if (event.key === 'Shift') {
      this.handleShift(event, lang);
    }
  }

  handleClick(event, lang) {
    this.setActiveKey(event);
    if (event.target.code === 'CapsLock') {
      this.handleCaps(event, lang);
    }
    if (event.target.code === 'ShiftLeft' || event.target.code === 'ShiftRight') {
      this.handleShift(event, lang);
    }
  }

  setActiveKey(event) {
    this.allKeys.forEach((elem) => {
      if (elem.code === event.code || elem.code === event.target.code) {
        if (event.type === 'keydown' || event.type === 'mousedown') { elem.setActiveState(); } else { elem.setDefaultState(); }
      } else if ((event.type === 'keyup' || event.type === 'mouseup') && !elem.isPressed) elem.setDefaultState();
    });
  }

  handleShift(event, lang) {
    this.allKeys.forEach((elem) => {
      elem.handleShift(event, lang, this.isCapsLocked);
    });
  }

  handleCaps(event, lang) {
    this.isCapsLocked = !this.isCapsLocked;
    this.lettersArray.forEach((elem) => {
      elem.toggleCaps(null, this.isCapsLocked, lang);
    });
    this.allKeys.find((elem) => elem.code === event.code).toggleCaps('CapsBtn');
  }
}
