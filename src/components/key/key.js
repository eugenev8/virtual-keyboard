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
    this.textContent = this.keyRu;
  }

  setEnLanguage() {
    this.textContent = this.keyEn;
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

  handleShift(event, lang, isCapsLocked, isKeyboardShifted) {
    if (this.keyEnShift && !event.repeat) {
      if (event.type === 'keydown') {
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
          } else if (this.isShifted) { this.Unshift(lang); }
        } else if (!isCapsLocked) { this.Unshift(lang); }
      } else if (event.type === 'click') {
        if (isKeyboardShifted) {
          if (isCapsLocked) {
            if (this.isShifted) {
              this.Unshift(lang);
            } else if (!this.isShifted) {
              this.activateShift(lang);
            }
          } else if (!isCapsLocked) {
            this.activateShift(lang);
          }
        } else if (isCapsLocked) {
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
    this.textContent = this.keyRuShift;
  }

  ShiftEn() {
    this.textContent = this.keyEnShift;
  }

  UnshiftRu() {
    this.textContent = this.keyRu;
  }

  UnshiftEn() {
    this.textContent = this.keyEn;
  }
}

customElements.define('keyboard-key', Key);
