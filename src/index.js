import React from 'react'; //Importando o React
import ReactDOM from 'react-dom'; //Importando o React e sua conexão com o navegador (para executar)
import App from './App'; //Importando o App.js

ReactDOM.render( //Renderizando (colocar em tela) o App
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

