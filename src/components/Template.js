export default class Template {
  constructor(templateSelector) {
    this._template = templateSelector;
  }

  getTemplate() {
    const templateElement = document
      .querySelector(this._template)
      .content.cloneNode(true);

    return templateElement;
  }
}
