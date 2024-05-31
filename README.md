# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scripts

Запуск:

### `npm i` 
### `npm run start`

Билд:

### `npm run build`
### `serve -s build`

По структуре:

React, TypeScript, scss-modules.

i18n - библиотека для мультиязычности, в src/locales файлы c переводами, весь текст на сайте редачим там. 
idb - библиотека для сохранения тяжеловесной анимации в localStorage.
lottie - билиотека для загрузки json анимации.

В src/hooks кастомный хук для корретного подсчета высоты экрана в мобильных браузерах.

В src/scss обнуляющий стили файл и файл с scss-переменными.

В src/fonts шрифт Helvetica, он был в макете, но не используется. Можно удалить эту папку, если этот шрифт не нужен.

Постер в /public для отображения под ссылкой при при репосте сайта.

Для замены карты в src/components/Contacts/Contacts.tsx меняем ссылку в src в iframe, ссылку берем с Google Maps -> Поделиться -> Встраивание карт.
