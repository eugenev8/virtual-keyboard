import Key from '../components/key/key';
import Board from '../components/board/board';
import DOMUtils from '../components/DOM_Utils';
import videoMp4 from '../assets/rain_mp4.mp4';
import videoWebm from '../assets/rain_webm.webm';
import rainSound from '../assets/sound_rain.mp3';
import keyboardSound1 from '../assets/sound_keyboard1.mp3';
import keyboardSound2 from '../assets/sound_keyboard2.mp3';

export default class View extends DOMUtils {
  constructor() {
    super();
    this.allKeysObjects = [
      {
        code: 'Backquote',
        keyEn: '`',
        keyRu: 'ё',
        keyEnShift: '~',
        keyRuShift: 'Ё',
      },
      {
        code: 'Digit1',
        keyEn: '1',
        keyRu: '1',
        keyEnShift: '!',
        keyRuShift: '!',
      },
      {
        code: 'Digit2',
        keyEn: '2',
        keyRu: '2',
        keyEnShift: '@',
        keyRuShift: '"',
      },
      {
        code: 'Digit3',
        keyEn: '3',
        keyRu: '3',
        keyEnShift: '#',
        keyRuShift: '№',
      },
      {
        code: 'Digit4',
        keyEn: '4',
        keyRu: '4',
        keyEnShift: '$',
        keyRuShift: ';',
      },
      {
        code: 'Digit5',
        keyEn: '5',
        keyRu: '5',
        keyEnShift: '%',
        keyRuShift: '%',
      },
      {
        code: 'Digit6',
        keyEn: '6',
        keyRu: '6',
        keyEnShift: '^',
        keyRuShift: ':',
      },
      {
        code: 'Digit7',
        keyEn: '7',
        keyRu: '7',
        keyEnShift: '&',
        keyRuShift: '?',
      },
      {
        code: 'Digit8',
        keyEn: '8',
        keyRu: '8',
        keyEnShift: '*',
        keyRuShift: '*',
      },
      {
        code: 'Digit9',
        keyEn: '9',
        keyRu: '9',
        keyEnShift: '(',
        keyRuShift: '(',
      },
      {
        code: 'Digit0',
        keyEn: '0',
        keyRu: '0',
        keyEnShift: ')',
        keyRuShift: ')',
      },
      {
        code: 'Minus',
        keyEn: '-',
        keyRu: '-',
        keyEnShift: '_',
        keyRuShift: '_',
      },
      {
        code: 'Equal',
        keyEn: '=',
        keyRu: '=',
        keyEnShift: '+',
        keyRuShift: '+',
      },
      {
        code: 'Backspace',
        keyEn: 'Bs',
        keyRu: 'Bs',
      },
      {
        code: 'Tab',
        keyEn: 'Tab',
        keyRu: 'Tab',
      },
      {
        code: 'KeyQ',
        keyEn: 'q',
        keyRu: 'й',
        keyEnShift: 'Q',
        keyRuShift: 'Й',
      },
      {
        code: 'KeyW',
        keyEn: 'w',
        keyRu: 'ц',
        keyEnShift: 'W',
        keyRuShift: 'Ц',
      },
      {
        code: 'KeyE',
        keyEn: 'e',
        keyRu: 'у',
        keyEnShift: 'E',
        keyRuShift: 'У',
      },
      {
        code: 'KeyR',
        keyEn: 'r',
        keyRu: 'к',
        keyEnShift: 'R',
        keyRuShift: 'К',
      },
      {
        code: 'KeyT',
        keyEn: 't',
        keyRu: 'е',
        keyEnShift: 'T',
        keyRuShift: 'Е',
      },
      {
        code: 'KeyY',
        keyEn: 'y',
        keyRu: 'н',
        keyEnShift: 'Y',
        keyRuShift: 'Н',
      },
      {
        code: 'KeyU',
        keyEn: 'u',
        keyRu: 'г',
        keyEnShift: 'U',
        keyRuShift: 'Г',
      },
      {
        code: 'KeyI',
        keyEn: 'i',
        keyRu: 'ш',
        keyEnShift: 'I',
        keyRuShift: 'Ш',
      },
      {
        code: 'KeyO',
        keyEn: 'o',
        keyRu: 'щ',
        keyEnShift: 'O',
        keyRuShift: 'Щ',
      },
      {
        code: 'KeyP',
        keyEn: 'p',
        keyRu: 'з',
        keyEnShift: 'P',
        keyRuShift: 'З',
      },
      {
        code: 'BracketLeft',
        keyEn: '[',
        keyRu: 'х',
        keyEnShift: '{',
        keyRuShift: 'Х',
      },
      {
        code: 'BracketRight',
        keyEn: ']',
        keyRu: 'ъ',
        keyEnShift: '}',
        keyRuShift: 'Ъ',
      },
      {
        code: 'Backslash',
        keyEn: '\\',
        keyRu: '\\',
        keyEnShift: '|',
        keyRuShift: '/',
      },
      {
        code: 'Delete',
        keyEn: 'Del',
        keyRu: 'Del',
      },
      {
        code: 'CapsLock',
        keyEn: 'CLock',
        keyRu: 'CLock',
      },
      {
        code: 'KeyA',
        keyEn: 'a',
        keyRu: 'ф',
        keyEnShift: 'A',
        keyRuShift: 'Ф',
      },
      {
        code: 'KeyS',
        keyEn: 's',
        keyRu: 'ы',
        keyEnShift: 'S',
        keyRuShift: 'Ы',
      },
      {
        code: 'KeyD',
        keyEn: 'd',
        keyRu: 'в',
        keyEnShift: 'D',
        keyRuShift: 'В',
      },
      {
        code: 'KeyF',
        keyEn: 'f',
        keyRu: 'а',
        keyEnShift: 'F',
        keyRuShift: 'А',
      },
      {
        code: 'KeyG',
        keyEn: 'g',
        keyRu: 'п',
        keyEnShift: 'G',
        keyRuShift: 'П',
      },
      {
        code: 'KeyH',
        keyEn: 'h',
        keyRu: 'р',
        keyEnShift: 'H',
        keyRuShift: 'Р',
      },
      {
        code: 'KeyJ',
        keyEn: 'j',
        keyRu: 'о',
        keyEnShift: 'J',
        keyRuShift: 'О',
      },
      {
        code: 'KeyK',
        keyEn: 'k',
        keyRu: 'л',
        keyEnShift: 'K',
        keyRuShift: 'Л',
      },
      {
        code: 'KeyL',
        keyEn: 'l',
        keyRu: 'д',
        keyEnShift: 'L',
        keyRuShift: 'Д',
      },
      {
        code: 'Semicolon',
        keyEn: ';',
        keyRu: 'ж',
        keyEnShift: ':',
        keyRuShift: 'Ж',
      },
      {
        code: 'Quote',
        keyEn: "'",
        keyRu: 'э',
        keyEnShift: '"',
        keyRuShift: 'Э',
      },
      {
        code: 'Enter',
        keyEn: 'Enter',
        keyRu: 'Enter',
      },
      {
        code: 'ShiftLeft',
        keyEn: 'Shift',
        keyRu: 'Shift',
      },
      {
        code: 'KeyZ',
        keyEn: 'z',
        keyRu: 'я',
        keyEnShift: 'Z',
        keyRuShift: 'Я',
      },
      {
        code: 'KeyX',
        keyEn: 'x',
        keyRu: 'ч',
        keyEnShift: 'X',
        keyRuShift: 'Ч',
      },
      {
        code: 'KeyC',
        keyEn: 'c',
        keyRu: 'с',
        keyEnShift: 'C',
        keyRuShift: 'С',
      },
      {
        code: 'KeyV',
        keyEn: 'v',
        keyRu: 'м',
        keyEnShift: 'V',
        keyRuShift: 'М',
      },
      {
        code: 'KeyB',
        keyEn: 'b',
        keyRu: 'и',
        keyEnShift: 'B',
        keyRuShift: 'И',
      },
      {
        code: 'KeyN',
        keyEn: 'n',
        keyRu: 'т',
        keyEnShift: 'N',
        keyRuShift: 'Т',
      },
      {
        code: 'KeyM',
        keyEn: 'm',
        keyRu: 'ь',
        keyEnShift: 'M',
        keyRuShift: 'Ь',
      },
      {
        code: 'Comma',
        keyEn: ',',
        keyRu: 'б',
        keyEnShift: '<',
        keyRuShift: 'Б',
      },
      {
        code: 'Period',
        keyEn: '.',
        keyRu: 'ю',
        keyEnShift: '>',
        keyRuShift: 'Ю',
      },
      {
        code: 'Slash',
        keyEn: '/',
        keyRu: '.',
        keyEnShift: '?',
        keyRuShift: ',',
      },
      {
        code: 'ArrowUp',
        keyEn: '▲',
        keyRu: '▲',
      },
      {
        code: 'ShiftRight',
        keyEn: 'Shift',
        keyRu: 'Shift',
      },
      {
        code: 'ControlLeft',
        keyEn: 'Ctrl',
        keyRu: 'Ctrl',
      },
      {
        code: 'MetaLeft',
        keyEn: 'Meta',
        keyRu: 'Meta',
      },
      {
        code: 'AltLeft',
        keyEn: 'Alt',
        keyRu: 'Alt',
      },
      {
        code: 'Space',
        keyEn: ' ',
        keyRu: ' ',
      },
      {
        code: 'AltRight',
        keyEn: 'Alt',
        keyRu: 'Alt',
      },
      {
        code: 'ArrowLeft',
        keyEn: '◄',
        keyRu: '◄',
      },
      {
        code: 'ArrowDown',
        keyEn: '▼',
        keyRu: '▼',
      },
      {
        code: 'ArrowRight',
        keyEn: '►',
        keyRu: '►',
      },

    ];
    this.keysForTextarea = [
      'Enter',
      'Tab',
      'Space',
      'Backquote',
      'Digit1',
      'Digit2',
      'Digit3',
      'Digit4',
      'Digit5',
      'Digit6',
      'Digit7',
      'Digit8',
      'Digit9',
      'Digit0',
      'Minus',
      'Equal',
      'KeyQ',
      'KeyW',
      'KeyE',
      'KeyR',
      'KeyT',
      'KeyY',
      'KeyU',
      'KeyI',
      'KeyO',
      'KeyP',
      'BracketLeft',
      'BracketRight',
      'KeyA',
      'KeyS',
      'KeyD',
      'KeyF',
      'KeyG',
      'KeyH',
      'KeyJ',
      'KeyK',
      'KeyL',
      'Semicolon',
      'Quote',
      'KeyZ',
      'KeyX',
      'KeyC',
      'KeyV',
      'KeyB',
      'KeyN',
      'KeyM',
      'Comma',
      'Period',
      'Slash',
      'Backslash',
    ];
    this.app = DOMUtils.createElement('div', 'root');
    this.addBackground();

    const upperHalf = DOMUtils.createElement('div', 'app__block app__block_up');
    // The textarea
    this.addTextarea();
    upperHalf.append(this.label, this.textArea);

    const lowerHalf = DOMUtils.createElement('div', 'app__block app__block_down');
    // The Keyboard
    this.board = new Board(this.allKeysObjects);
    lowerHalf.append(this.board.returnBoard());

    // Notification
    this.addNotification();

    // Menu
    this.addMenu();
    this.addSounds();

    this.app.append(this.backgroundVideo, upperHalf, lowerHalf, this.notification);
    this.app.append(this.menu, this.menuBtn);
    document.querySelector('body').appendChild(this.app);
  }

  addTextarea() {
    this.textArea = DOMUtils.createElement('textarea', 'textArea');
    this.textArea.rows = 10;
    this.textArea.cols = 30;
    this.textArea.id = 'TextArea';
    this.label = DOMUtils.createElement('label', 'textArea_label');
    this.label.setAttribute('for', 'TextArea');
    this.label.innerText = 'Tell us your story:';
  }

  addSounds() {
    this.rainSound = new Audio(rainSound);
    this.rainSound.loop = true;

    this.keyboardSound1 = new Audio(keyboardSound1);
    this.keyboardSound2 = new Audio(keyboardSound2);

    this.setVolume(0);
  }

  addBackground() {
    this.backgroundVideo = DOMUtils.createElement('video', 'backgroundVideo');
    this.backgroundVideo.autoplay = true;
    this.backgroundVideo.loop = true;
    this.backgroundVideo.muted = true;
    this.backgroundVideo.playsinline = true;
    this.backgroundVideo.innerHTML = `<source src=${videoWebm} type="video/webm">
    <source src=${videoMp4} type="video/mp4">`;
    if (document.hidden) {
      this.isBackgroundActive = false;
    } else {
      this.isBackgroundActive = true;
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (!this.isBackgroundActive) {
          return 1;
        }
        this.isBackgroundActive = false;
        this.isBackgroundForceClosed = true;
      } else {
        if (!this.isBackgroundForceClosed) {
          return 1;
        }
        this.isBackgroundActive = true;
        this.isBackgroundForceClosed = false;
      }
      this.toggleBackground();
      return 0;
    });
  }

  enableRainSound() {
    if (this.btnToggleBackground_switch.checked) {
      this.rainSound.muted = false;
      this.rainSound.play();
    }
  }

  disableRainSound() {
    this.rainSound.muted = true;
    this.rainSound.pause();
  }

  addNotification() {
    this.notification = DOMUtils.createElement('div', 'notification');
    this.description = DOMUtils.createElement('div', 'notification__description');
    this.agreeBtn = DOMUtils.createElement('button', 'notification__button');
    this.agreeBtn.addEventListener('click', () => {
      this.setVolume(0.5);
      this.notification.style.transform = 'translateY(120%)';
      setTimeout(() => {
        this.notification.remove();
      }, 300);
    });
    this.notification.append(this.description, this.agreeBtn);
  }

  addMenu() {
    this.menu = DOMUtils.createElement('div', 'menu');
    this.menuBtn = DOMUtils.createElement('button', 'menu__button');
    this.menuBtn.innerHTML = `
    <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 297 297" xml:space="preserve">
    <g>
    <g>
    <g>
    <path d="M279.368,24.726H102.992c-9.722,0-17.632,7.91-17.632,17.632V67.92c0,9.722,7.91,17.632,17.632,17.632h176.376
    c9.722,0,17.632-7.91,17.632-17.632V42.358C297,32.636,289.09,24.726,279.368,24.726z"/>
    <path d="M279.368,118.087H102.992c-9.722,0-17.632,7.91-17.632,17.632v25.562c0,9.722,7.91,17.632,17.632,17.632h176.376
    c9.722,0,17.632-7.91,17.632-17.632v-25.562C297,125.997,289.09,118.087,279.368,118.087z"/>
    <path d="M279.368,211.448H102.992c-9.722,0-17.632,7.91-17.632,17.633v25.561c0,9.722,7.91,17.632,17.632,17.632h176.376
    c9.722,0,17.632-7.91,17.632-17.632v-25.561C297,219.358,289.09,211.448,279.368,211.448z"/>
    <path d="M45.965,24.726H17.632C7.91,24.726,0,32.636,0,42.358V67.92c0,9.722,7.91,17.632,17.632,17.632h28.333
    c9.722,0,17.632-7.91,17.632-17.632V42.358C63.597,32.636,55.687,24.726,45.965,24.726z"/>
    <path d="M45.965,118.087H17.632C7.91,118.087,0,125.997,0,135.719v25.562c0,9.722,7.91,17.632,17.632,17.632h28.333
    c9.722,0,17.632-7.91,17.632-17.632v-25.562C63.597,125.997,55.687,118.087,45.965,118.087z"/>
    <path d="M45.965,211.448H17.632C7.91,211.448,0,219.358,0,229.081v25.561c0,9.722,7.91,17.632,17.632,17.632h28.333
    c9.722,0,17.632-7.91,17.632-17.632v-25.561C63.597,219.358,55.687,211.448,45.965,211.448z"/>
    </g>
    </g>
    </g>
    </svg>`;
    this.menuBtn.addEventListener('click', () => {
      this.menu.classList.toggle('isToggled');
    });
    // Sound toggle
    const btnToggleSound = DOMUtils.createElement('div', 'menu__item menu__soundToggle');
    this.btnToggleSound_range = DOMUtils.createElement('input', 'menu__soundRange');
    this.btnToggleSound_range.setAttribute('type', 'range');
    this.btnToggleSound_range.id = 'SoundVolume';
    this.btnToggleSound_range.min = 0;
    this.btnToggleSound_range.max = 1;
    this.btnToggleSound_range.step = 0.01;
    this.labelForSound = DOMUtils.createElement('label', 'menu__label');
    this.labelForSound.innerText = 'Sound volume:';
    this.labelForSound.setAttribute('for', 'SoundVolume');
    btnToggleSound.append(this.labelForSound, this.btnToggleSound_range);
    this.menu.appendChild(btnToggleSound);
    // Language toggle
    const btnToggleLanguage = DOMUtils.createElement('div', 'menu__item menu__language');
    this.btnToggleLanguage_switch = DOMUtils.createElement('input', 'menu__language');
    this.btnToggleLanguage_switch.setAttribute('type', 'checkbox');
    this.btnToggleLanguage_switch.id = 'Language';
    this.btnToggleLanguage_switch.checked = true;
    this.labelForLanguage = DOMUtils.createElement('label', 'menu__label');
    this.labelForLanguage.innerText = 'Language:';
    this.labelForLanguage.setAttribute('for', 'Language');
    btnToggleLanguage.append(this.labelForLanguage, this.btnToggleLanguage_switch);
    this.menu.appendChild(btnToggleLanguage);
    // Background toggle
    const btnToggleBackground = DOMUtils.createElement('div', 'menu__item menu__language');
    this.btnToggleBackground_switch = DOMUtils.createElement('input', 'menu__background');
    this.btnToggleBackground_switch.setAttribute('type', 'checkbox');
    this.btnToggleBackground_switch.checked = true;
    this.btnToggleBackground_switch.id = 'Background';
    this.labelForBackground = DOMUtils.createElement('label', 'menu__label');
    this.labelForBackground.innerText = 'Background video:';
    this.labelForBackground.setAttribute('for', 'Background');
    btnToggleBackground.append(this.labelForBackground, this.btnToggleBackground_switch);
    this.btnToggleBackground_switch.addEventListener('input', () => {
      this.isBackgroundActive = !this.isBackgroundActive;
      this.toggleBackground();
    });

    this.menu.appendChild(btnToggleBackground);
  }

  toggleBackground() {
    if (this.isBackgroundActive) {
      this.app.appendChild(this.backgroundVideo);
      this.backgroundVideo.play();
      this.btnToggleBackground_switch.checked = true;
      this.setVolume(this.keyboardSound1.volume);
    } else {
      this.backgroundVideo.remove();
      this.disableRainSound();
      this.btnToggleBackground_switch.checked = false;
    }
  }

  addKey(key) {
    const newKey = new Key(key);
    this.allKeysObjects.push(newKey);
    return newKey;
  }

  toggleLanguage(lang) {
    if (lang === 'ru') {
      this.label.innerText = 'Расскажите свою историю:';
      this.labelForSound.innerText = 'Громкость звуков:';
      this.labelForLanguage.innerText = 'Язык:';
      this.labelForBackground.innerText = 'Видео на фоне:';
      this.description.innerHTML = 'Создано в Windows.<br>Переключить язык можно в меню справа вверху, либо комбинацией "ctrl + alt".';
      this.agreeBtn.innerHTML = 'Понятно';
      this.btnToggleLanguage_switch.checked = false;
      this.board.setRuLanguage();
    } else {
      this.label.innerText = 'Tell us your story:';
      this.labelForSound.innerText = 'Sound volume:';
      this.labelForLanguage.innerText = 'Language:';
      this.labelForBackground.innerText = 'Background video:';
      this.description.innerHTML = 'Created in Windows.<br>You can switch the language in the top right menu, or by pressing "ctrl + alt".';
      this.agreeBtn.innerHTML = 'Understood';
      this.btnToggleLanguage_switch.checked = true;
      this.board.setEnLanguage();
    }
  }

  handleKeyPress(event, lang) {
    if (!event.repeat) {
      this.board.handleKeyPress(event, lang);
    }
    this.playPressSound(event);
    this.board.allKeys.forEach((e) => {
      if (e.code === event.code || e.code === event.target.code) {
        this.handleTextArea(e.innerText, event);
      }
    });
  }

  addClickListener(lang) {
    this.board.boardDOM.addEventListener('mousedown', (event) => {
      if (event.target) {
        this.board.handleClick(event, lang);
      }
    });
    this.board.boardDOM.addEventListener('mouseup', (event) => {
      if (event.target) {
        this.board.handleClick(event, lang);
      }
    });
    this.board.allKeys.forEach((elem) => {
      elem.addEventListener('mouseleave', (event) => {
        if (event.target) {
          this.board.handleClick(event, lang);
        }
      });
    });
    this.board.boardDOM.addEventListener('click', (event) => {
      if (event.target) {
        this.board.handleClick(event, lang);
      }
    });
  }

  playPressSound(event) {
    if (this.keyboardSound1.muted) {
      return 1;
    }
    if (event.code === 'CapsLock') {
      if (event.type === 'keyup') {
        this.keyboardSound2.currentTime = 0;
        this.keyboardSound2.play();
        return 0;
      }
      return 1;
    }
    if (event.type === 'keydown' || event.type === 'click') {
      if (!this.keysForTextarea.includes(event.code)) {
        if (event.repeat) {
          return 0;
        }
        this.keyboardSound2.currentTime = 0;
        this.keyboardSound2.play();
        return 1;
      }
      if (event.repeat) {
        this.keyboardSound1.currentTime = 0;
        this.keyboardSound1.play();
        return 0;
      }
      if (!event.repeat) {
        this.keyboardSound2.currentTime = 0;
        this.keyboardSound2.play();
      }
      return 0;
    }
    return 0;
  }

  setVolume(volume) {
    if (volume === 0) {
      this.btnToggleSound_range.classList.add('isMuted');
      this.keyboardSound1.muted = true;
      this.keyboardSound2.muted = true;
      this.disableRainSound();
    } else {
      this.btnToggleSound_range.classList.remove('isMuted');
      this.keyboardSound1.muted = false;
      this.keyboardSound2.muted = false;
      this.enableRainSound();
    }
    this.rainSound.volume = volume;
    this.keyboardSound1.volume = volume;
    this.keyboardSound2.volume = volume;
    this.btnToggleSound_range.value = volume;
  }

  handleTextArea(key, event) {
    if (event.ctrlKey || event.metaKey) {
      return 1;
    }
    if (event.type === 'keydown' || event.type === 'click') {
      this.checkForAdding(key, event);
      this.checkForRemoval(event);
      this.checkForArrows(event);
      this.textArea.blur();
      this.textArea.focus();
    }
    return 0;
  }

  checkForAdding(key, event) {
    const code = event.code || event.target.code;
    if (this.keysForTextarea.includes(code)) {
      let insertion = key;
      if (code === 'Space') {
        insertion = ' ';
      }
      if (code === 'Tab') {
        insertion = '   ';
      }
      if (code === 'Enter') {
        insertion = '\n';
      }
      const cursorStart = this.textArea.selectionStart;
      const cursorEnd = this.textArea.selectionEnd;
      if (!this.textArea.value) {
        this.textArea.value += insertion;
      } else {
        const stringArr = this.textArea.value.split('');
        stringArr.splice(cursorStart, cursorEnd - cursorStart, insertion);
        this.textArea.value = stringArr.join('');
        if (code === 'Tab') {
          this.textArea.selectionStart = cursorStart + 3;
          this.textArea.selectionEnd = cursorStart + 3;
        } else {
          this.textArea.selectionStart = cursorStart + 1;
          this.textArea.selectionEnd = cursorStart + 1;
        }
      }
      return 0;
    }
    return 1;
  }

  checkForRemoval(event) {
    const code = event.code || event.target.code;
    if (code === 'Delete') {
      const cursorStart = this.textArea.selectionStart;
      const cursorEnd = this.textArea.selectionEnd;
      const stringArr = this.textArea.value.split('');
      stringArr.splice(cursorStart, cursorEnd - cursorStart === 0 ? 1 : cursorEnd - cursorStart);
      this.textArea.value = stringArr.join('');
      this.textArea.selectionStart = cursorStart;
      this.textArea.selectionEnd = cursorStart;
    }
    if (code === 'Backspace') {
      const cursorStart = this.textArea.selectionStart;
      const cursorEnd = this.textArea.selectionEnd;
      if (cursorStart === 0 && cursorEnd === 0) {
        return 1;
      }
      const stringArr = this.textArea.value.split('');
      const diff = cursorEnd - cursorStart;
      stringArr.splice(
        diff === 0 ? cursorStart - 1 : cursorStart,
        diff === 0
          ? 1 : diff,
      );
      this.textArea.value = stringArr.join('');
      if (diff > 0) {
        this.textArea.selectionStart = cursorStart;
        this.textArea.selectionEnd = cursorStart;
      } else {
        this.textArea.selectionStart = cursorStart - 1;
        this.textArea.selectionEnd = cursorStart - 1;
      }
      return 0;
    }
    return 1;
  }

  checkForArrows(event) {
    const code = event.code || event.target.code;
    if (code === 'ArrowLeft') {
      if (this.textArea.selectionStart === 0) {
        return 1;
      }
      this.textArea.selectionStart -= 1;
      this.textArea.selectionEnd -= 1;
      return 0;
    }
    if (code === 'ArrowRight') {
      this.textArea.selectionStart += 1;
      return 0;
    }
    if (code === 'ArrowUp') {
      if (this.textArea.selectionStart >= 5) {
        this.textArea.selectionStart -= 5;
        this.textArea.selectionEnd -= 5;
      } else {
        this.textArea.selectionStart = 0;
        this.textArea.selectionEnd = 0;
      }
      return 0;
    }
    if (code === 'ArrowDown') {
      this.textArea.selectionStart += 5;
      return 0;
    }
    return 1;
  }
}
