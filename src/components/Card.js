export default class Card {
  constructor(data, cardSelector) {
    this._src = data.src;
    this._alt = data.alt;
    this._date = data.date;
    this._text = data.text;
    this._template = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content.cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".newscard__image");
    this._cardDate = this._element.querySelector(".newscard__date");
    this._cardText = this._element.querySelector(".newscard__text");

    this._cardImage.src = this._src;
    this._cardImage.alt = this._alt;
    this._cardDate.innerText = this._date;
    this._cardText.innerText = this._text;

    return this._element;
  }
}
