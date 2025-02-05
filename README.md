# Code example bt

Пример кода с применением технологий:

- Flexbox, Grid
- Верстка по БЭМ
- Адаптивная верстка
- Figma
- popup
- JS Классы
- Webpack
- Ленивая загрузка изображений

## Сcылки

(Открыть ссылку в новом окне: ctrl + shift + ссылка)

- [Ссылка на выложенную на сервер работающую фронтенд часть приложения](https://bttest-3no2.onrender.com/). (Если ссылка не работает, приложение можно протестировать локально. [Ниже](#инструкция-по-развертыванию) инструкция по развертыванию).

### У проекта следующий функционал:

- Адаптивная верстка в соответствии с дизайном макета figma [дизайном из figma](https://www.figma.com/design/j9iR9syzdAPXZfE2vU1qiW/bttest?node-id=0-1&p=f&t=E69hyVaQcssx5W0K-0).
- Отправка форм(валидация, сбор данных с формы, возможность прикрепления и отправки нескольких файлов). Для отправки форм используется JavaScript.
- Страница корректно отображаться в современных браузерах (Chrome, Firefox, Edge, Safari).
- При сборке проета командой `npm run build` ожидается увидеть всего 5 html страниц: полные( с хедером, контентом и футером - 2 шт.) + к каждой странице аналог с их контентом(2 шт.) + отдельно 1 файл с хедером, футером и модальными окнами(1 шт.).

### Инструкция по развертыванию:

- Клонировать проект: git clone git@github.com:alvde-site/bttest.git
- Перейти в корневую директорию frontend и установить зависимости: npm install
- Запустить frontend часть приложения на 8080 порту: npm run dev
- Открыть в браузере страницу по адресу http://localhost:8080/
