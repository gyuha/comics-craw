// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import AppConfig from './AppConfig';

// AppConfig.getInstance(AppConfig);
// AppConfig.getInstance(AppConfig).add();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
