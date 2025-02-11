import "./index.css";

import {
  closeMenuButton,
  openMenuButton,
  navMenu,
  newsCardsContainerSelector,
  newCardsData,
  fileInputContainerSelector,
  fileInput,
  feedbackForm,
  popupListItemSelector,
} from "../utils/constants";
import TemplateCard from "../components/TemplateCard";
import Reneder from "../components/Render";
import TemplateFileName from "../components/TemplateFileName";
import Popup from "../components/Popup";
import TemplatePopupItem from "../components/TemplatePopupItem";

const openNav = () => {
  navMenu.style.width = "100%";
};

const closeNav = () => {
  navMenu.style.width = "0";
};

const successPopup = new Popup(".popup--success");
successPopup.setEventListeners();

const successSubmit = (e) => {
  e.preventDefault();
  const popupItems = document
    .querySelector(popupListItemSelector)
    .querySelectorAll(".popup__listitem");
  popupItems.forEach((i) => {
    i.remove();
  });
  const inputs = feedbackForm.querySelectorAll("[name]");
  const inputsData = [];
  inputs.forEach((i) => {
    if (i.value) {
      inputsData.push({ name: i.name, value: i.value });
    }
  });
  const fileInputCount = fileInput.files.length;
  if (fileInputCount) {
    inputsData.push({ name: "files", value: fileInputCount });
  }

  const createPopupItem = (itemData) => {
    const item = new TemplatePopupItem(itemData, "#popup-listitem-template");
    return item.generateFileNameItem();
  };

  const successFormData = new Reneder(
    {
      renderer: (formItemData) => {
        successFormData.addItem(createPopupItem(formItemData));
      },
    },
    popupListItemSelector
  );

  successFormData.rendererItems(inputsData);
  successPopup.open();
  feedbackForm.reset();
  const fileItems = document
    .querySelector(fileInputContainerSelector)
    .querySelectorAll(".files__item");
  fileItems.forEach((i) => {
    i.remove();
  });
};

if (
  window.location.pathname === "/" ||
  window.location.pathname === "/index.js"
) {
  /// index.js location ----------------------------------------------------------------

  const createCard = (cardData) => {
    const card = new TemplateCard(cardData, "#newscard-template");
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
    newsCardsContainerSelector
  );

  newsCardsList.rendererItems(newCardsData);

  // lazyLoad
  const images = document
    .querySelector(".news__cards")
    .querySelectorAll(".newscard__image");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.setAttribute("src", target.dataset.src);
          target.classList.add("fade");
          observer.unobserve(target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );
  images.forEach((image) => observer.observe(image));
} else if (window.location.pathname === "/formpage.html") {
  /// start formpage.html location ----------------------------------------------------

  const createFileItem = (fileData) => {
    const fileItem = new TemplateFileName(fileData, "#files-template");
    return fileItem.generateFileNameItem();
  };

  // Отрисовка выбранных файлов на странице
  const fileNameItemList = new Reneder(
    {
      renderer: (fileData) => {
        // fileData = объект с именем файла
        fileNameItemList.addItem(createFileItem(fileData));
      },
    },
    fileInputContainerSelector
  );

  const addFilesName = (e) => {
    const files = e.target.files;
    const filesNumber = files.length;
    const fileItems = [];
    for (let i = 0; i < filesNumber; i++) {
      fileItems.push({ name: files[i].name });
    }
    fileNameItemList.rendererItems(fileItems);
  };

  fileInput.addEventListener("change", addFilesName);
  feedbackForm.addEventListener("submit", successSubmit);
}

// Listeneres -------------------------------------------------------------------------

openMenuButton.addEventListener("click", openNav);
closeMenuButton.addEventListener("click", closeNav);
