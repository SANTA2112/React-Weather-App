import React from 'react';
import { Wrapper, City, Temp, TepmBlock, Average, WeatherDesc, Humidity, Pressure, Sunrise, Sunset, Cloudiness, Wind } from "./styled";

export default ({ weather }) => {
  const renderDate = timeStamp => {
    const hours = new Date(timeStamp).getUTCHours();
    const minutes = new Date(timeStamp).getUTCMinutes();
    return `${hours}:${minutes}`
  }
  return (
    <Wrapper>
      <City>{weather.name}</City>
      <TepmBlock>
        <Temp>{weather.main.temp}</Temp>
        <Average>{weather.main.temp_min} / {weather.main.temp_max}</Average>
      </TepmBlock>
      <WeatherDesc>{weather.weather[0].description}</WeatherDesc>
      <Cloudiness>Облачность: {weather.clouds.all} %</Cloudiness>
      <Wind>Ветер: {weather.wind.speed} м/с</Wind>
      <Humidity>Влажность: {weather.main.humidity} %</Humidity>
      <Pressure>Давление: {weather.main.pressure} мм.рт.сс</Pressure>
      <Sunrise>Восход: {renderDate(weather.sys.sunrise)}</Sunrise>
      <Sunset>Закат: {renderDate(weather.sys.sunset)}</Sunset>
    </Wrapper>
  );
};
