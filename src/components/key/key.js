export default class Key extends HTMLElement {
  constructor(element) {
    super();
    this.code = element.code;
    this.keyEn = element.keyEn;
    this.keyRu = element.keyRu;
    this.keyEnShift = element.keyEnShift;
    this.keyRuShift = element.keyRuShift;
    this.isPressed = false;
    this.isShifted = false;
  }

  setRuLanguage() {
    this.innerText = this.keyRu;
  }

  setEnLanguage() {
    this.innerText = this.keyEn;
  }

  setActiveState() {
    if (this.code === 'CapsLock') return 0;
    this.isPressed = true;
    this.classList.add('key_active');
    return 1;
  }

  setDefaultState() {
    if (this.code === 'CapsLock') return 0;
    this.isPressed = false;
    this.classList.remove('key_active');
    return 1;
  }

  handleShift(event, lang, isCapsLocked) {
    if (this.keyEnShift && !event.repeat) {
      if (event.type === 'keydown' || event.type === 'mousedown') {
        if (isCapsLocked) {
          if (this.isShifted) {
            this.Unshift(lang);
          } else if (!this.isShifted) {
            this.activateShift(lang);
          }
        } else if (!isCapsLocked) {
          this.activateShift(lang);
        }
      } else if (event.type === 'keyup' || event.type === 'mouseup' || event.type === 'mouseleave') {
        if (isCapsLocked) {
          if (!this.isShifted) {
            this.activateShift(lang);
          } else this.Unshift(lang);
        } else this.Unshift(lang);
      }
    }
    return 0;
  }

  toggleCaps(isCapsLockBtn, isCapsLocked, lang) {
    if (isCapsLockBtn === 'CapsBtn') {
      this.classList.toggle('key_active');
    }
    if (this.keyEnShift) {
      if (isCapsLocked) {
        if (this.isShifted) {
          this.Unshift(lang);
        } else if (!this.isShifted) {
          this.activateShift(lang);
        }
      } else if (!isCapsLocked) {
        if (this.isShifted) {
          this.Unshift(lang);
        } else {
          this.activateShift(lang);
        }
      }
    }
  }

  activateShift(lang) {
    if (lang === 'ru') {
      this.ShiftRu();
    } else {
      this.ShiftEn();
    }
    this.isShifted = true;
  }

  Unshift(lang) {
    if (lang === 'ru') {
      this.UnshiftRu();
    } else {
      this.UnshiftEn();
    }
    this.isShifted = false;
  }

  ShiftRu() {
    this.innerText = this.keyRuShift;
  }

  ShiftEn() {
    this.innerText = this.keyEnShift;
  }

  UnshiftRu() {
    this.innerText = this.keyRu;
  }

  UnshiftEn() {
    this.innerText = this.keyEn;
  }
}

customElements.define('keyboard-key', Key);
