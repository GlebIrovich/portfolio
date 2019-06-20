import './index.css';
import './scss/custom.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter basename="/">
    <App />
  </HashRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
