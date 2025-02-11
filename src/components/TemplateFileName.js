import Template from "./Template";

export default class TemplateFileName extends Template {
  constructor(data, templateSelector) {
    super(templateSelector);
    this._name = data.name;
    this._template = templateSelector;
  }

  generateFileNameItem() {
    this._element = this.getTemplate();
    this._filesItem = this._element.querySelector(".files__item");

    this._filesItem.innerText = this._name;

    return this._element;
  }
}
