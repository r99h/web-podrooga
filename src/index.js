import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

{/* <html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>podrooga</title>
  <link rel="stylesheet" href="style.css">
  <!-- ниже подключили стили для мобильных устройств: в конце урока сможете поделиться проектом в социальных сетях без страха, что на телефоне друга или подруги будет выглядеть некрасиво -->
  <link rel="stylesheet" href="https://code.s3.yandex.net/web-code/adaptive.css">
  <link rel="icon" type="image" href="https://wmpics.pics/di-IRNTK.png">
</head>
<body>
  <div class="header">
    <p class='logo'>podrooga</p>
    <div class="button">
      <span class='vk'>vk</span>
    </div>
    <div class="button">
      <span class='inst'>inst</span>
    </div>
    <div class="button">
      <span class='music'>music</span>
    </div>
    <div class="button">
      <span class='photo'>photo</span>
    </div>
  </div>

  <img class="image" src='https://wmpics.pics/di-IRNTK.png'>

  <div class="advice">
    <span class='phrase'>мы — группа podrooga </span>
  </div>

  <p class="footer">© 2021 Сделал Дима Жданов, филолог-недоучка</p>

  <script src="https://code.s3.yandex.net/web-code/smoothly.js"></script>
  <script src="script.js"></script>
</body>
</html> */}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
