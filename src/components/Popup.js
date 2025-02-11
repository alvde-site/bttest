export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEsc = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup--opened");
    this._addEscCloseListener();
  }

  close() {
    this._popupElement.classList.remove("popup--opened");
    this._removeEscCloseListener();
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _addEscCloseListener() {
    document.addEventListener("keydown", this._handleEsc);
  }

  _removeEscCloseListener() {
    document.removeEventListener("keydown", this._handleEsc);
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      // Закрытие по overlay
      if (evt.target.classList.contains("popup--opened")) {
        this.close();
      }
      // закрытие по крестику
      if (evt.target.classList.contains("popup__close")) {
        this.close();
      }
    });
  }
}
