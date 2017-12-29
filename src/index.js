import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const target = document.getElementById('root')

ReactDOM.render(
  <App />
  , target);
registerServiceWorker();
