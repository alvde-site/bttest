import "./index.css";

import { closeMenuButton, openMenuButton, navMenu } from "../utils/constants";

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
