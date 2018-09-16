import React from 'react';
import { render } from 'react-dom';
import './_assets/css/global.css';
import '@babel/polyfill';

import App from './App';

render(
  <App />,
  document.querySelector('#app')
);
