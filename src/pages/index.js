import "./index.css";

import {
  closeMenuButton,
  openMenuButton,
  navMenu,
  newsCardsContainer,
  newCardsData,
} from "../utils/constants";
import Card from "../components/Card";
import Reneder from "../components/Render";

const createCard = (cardData) => {
  const card = new Card(cardData, "#newscard-template");
  return card.generateCard();
};

// Отрисовка карточек на странице
const newsCardsList = new Reneder(
  {
    renderer: (cardData) => {
      // cardData = объект карточки
      newsCardsList.addItem(createCard(cardData));
    },
  },
  newsCardsContainer
);

newsCardsList.rendererItems(newCardsData);

const openNav = () => {
  navMenu.style.width = "100%";
  console.log("open");
};

const closeNav = () => {
  navMenu.style.width = "0";
  console.log("close");
};

openMenuButton.addEventListener("click", () => {
  openNav();
});
closeMenuButton.addEventListener("click", () => {
  closeNav();
});
