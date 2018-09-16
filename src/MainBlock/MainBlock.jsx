import React from 'react';
import WeatherInfo from '../WeatherInfo/';
import WeatherWeek from '../WeatherWeek/';
import { Block, LeftSide } from './styled';

export default ({ image, weather, weatherOnWeek }) => (
  <div>
    <Block image={image}/>
    <LeftSide>
      <WeatherInfo weather={weather}/>
      <WeatherWeek weatherOnWeek={weatherOnWeek}/>
    </LeftSide>
  </div>
);
