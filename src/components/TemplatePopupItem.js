import Template from "./Template";

export default class TemplatePopupItem extends Template {
  constructor(data, templateSelector) {
    super(templateSelector);
    this._name = data.name;
    this._value = data.value;
    this._template = templateSelector;
  }

  generateFileNameItem() {
    this._element = this.getTemplate();
    this._popupItemName = this._element.querySelector(".listitem__name");
    this._popupItemValue = this._element.querySelector(".listitem__value");

    this._popupItemName.innerText = `${this._name}: `;
    this._popupItemValue.innerText = this._value;

    return this._element;
  }
}
