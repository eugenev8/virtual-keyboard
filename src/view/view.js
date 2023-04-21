import Key from '../components/key/key';
import Board from '../components/board/board';
import DOMUtils from '../components/DOM_Utils';

import videoMp4 from '../assets/rain_mp4.mp4';
import videoWebm from '../assets/rain_webm.webm';

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
    this.app = DOMUtils.createElement('div', 'root');
    const backgroundVideo = DOMUtils.createElement('video', 'backgroundVideo');
    backgroundVideo.autoplay = true;
    backgroundVideo.loop = true;
    backgroundVideo.muted = true;
    backgroundVideo.playsinline = true;
    backgroundVideo.innerHTML = `<source src=${videoWebm} type="video/webm">
    <source src=${videoMp4} type="video/mp4">`;

    const upperHalf = DOMUtils.createElement('div', 'app__block app__block_up');
    // The textarea
    this.textArea = DOMUtils.createElement('textarea', 'textArea');
    this.textArea.readOnly = true;
    this.textArea.rows = 15;
    this.textArea.cols = 30;
    this.textArea.id = 'TextArea';
    this.label = DOMUtils.createElement('label', 'textArea_label');
    this.label.setAttribute('for', 'TextArea');
    this.label.innerText = 'Tell us your story:';
    upperHalf.append(this.label, this.textArea);

    const lowerHalf = DOMUtils.createElement('div', 'app__block app__block_down');
    // The Keyboard
    this.board = new Board(this.allKeysObjects);
    this.addClickListener();
    lowerHalf.append(this.board.returnBoard());

    this.app.append(backgroundVideo, upperHalf, lowerHalf);
    document.querySelector('body').appendChild(this.app);
  }

  addKey(key) {
    const newKey = new Key(key);
    this.allKeysObjects.push(newKey);
    return newKey;
  }

  toggleLanguage(lang) {
    if (lang === 'ru') {
      this.label.innerText = 'Расскажите свою историю:';
      this.board.setRuLanguage();
    } else {
      this.label.innerText = 'Tell us your story:';
      this.board.setEnLanguage();
    }
  }

  handleKeyPress(event, lang) {
    this.board.handleKeyPress(event, lang);
    this.board.allKeys.forEach((e) => {
      if (e.code === event.code) {
        this.handleTextArea(e.innerText, event);
      }
    });
  }

  addClickListener() {
    this.board.boardDOM.addEventListener('mousedown', (event) => {
      if (event.target) {
        this.board.handleClick(event);
      }
    });
    this.board.boardDOM.addEventListener('mouseup', (event) => {
      if (event.target) {
        this.board.handleClick(event);
      }
    });
    this.board.boardDOM.addEventListener('mouseleave', (event) => {
      if (event.target) {
        this.board.handleClick(event);
      }
    });
    this.board.boardDOM.addEventListener('click', (event) => {
      if (event.target) {
        this.board.handleClick(event);
      }
    });
  }

  handleTextArea(key, event) {
    this.textArea.focus();
    console.log(key);
    console.log(event);
  }
}
