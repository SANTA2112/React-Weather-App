import React from 'react';
import WeatherInfo from '../WeatherInfo/'
import { Block } from './styled';

export default ({ image, weather }) => (
  <div>
    <Block image={image}/>
    <WeatherInfo weather={weather}/>
  </div>
);
