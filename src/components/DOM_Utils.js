export default class DOMUtils {
  static createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    return element;
  }

  static getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }
}
