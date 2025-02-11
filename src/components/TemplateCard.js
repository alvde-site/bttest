import Template from "./Template";

export default class TemplateCard extends Template {
  constructor(data, templateSelector) {
    super(templateSelector);
    this._src = data.src;
    this._alt = data.alt;
    this._date = data.date;
    this._text = data.text;
    this._template = templateSelector;
  }

  generateCard() {
    this._element = this.getTemplate();
    this._cardImage = this._element.querySelector(".newscard__image");
    this._cardDate = this._element.querySelector(".newscard__date");
    this._cardText = this._element.querySelector(".newscard__text");

    this._cardImage.dataset.src = this._src;
    this._cardImage.alt = this._alt;
    this._cardImage.onerror = this.error;
    this._cardDate.innerText = this._date;
    this._cardText.innerText = this._text;

    return this._element;
  }

  error(_this) {
    console.log(_this, "Ошибка загрузки фотографии");
  }
}
