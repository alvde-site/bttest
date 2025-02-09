export const openMenuButton = document.querySelector(".menu__button");
export const closeMenuButton = document.querySelector(".nav__close-button");
export const navMenu = document.querySelector(".menu__nav");

// Данные карточек
const newsImage = require("../images/news.png");
export const newsCardsContainer = ".news__cards";
export const numberOfCards = 9;

const newsCard = {
  src: newsImage,
  alt: "Новости",
  date: "30.10.2024",
  text: "Скорость движения на Алтуфьевском шоссе выросла на 5%",
};

export const newCardsData = [];

for (let i = 1; i <= numberOfCards; i++) {
  newCardsData.push({ ...newsCard, alt: `${newsCard.alt} ${i}` });
}

newCardsData.reverse();
