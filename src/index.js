import React from 'react';
import { render } from 'react-dom';
import './_assets/css/global.css';
import '@babel/polyfill';

import Weather from './Weather';

render(
  <Weather />,
  document.querySelector('#app')
);
