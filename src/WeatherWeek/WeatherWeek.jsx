import React from 'react';
import { convertDate } from "../constants";
import { Wrapper, TextBlock, Text, TextWrap, WeatherWrap } from "./styled";

export default ({ weatherOnWeek }) => {

  return (
    <Wrapper>
      <TextWrap>
        <TextBlock>
          <Text>Днем</Text>
          <Text>Ночью</Text>
        </TextBlock>
        <TextBlock>
          <Text>Ветер</Text>
          <Text>Давление</Text>
        </TextBlock>
      </TextWrap>
      <WeatherWrap>
        { weatherOnWeek && weatherOnWeek.forecasts.map(el => (
        <div key={el.date_ts}>
          <div>{convertDate(el.date)}</div>
          <div>{el.parts.day.temp_min} / {el.parts.day.temp_max}</div>
          <div>{el.parts.night.temp_avg}</div>
          <div>{el.parts.day.condition}</div>
          <div>{el.parts.day.wind_dir}: {el.parts.day.wind_speed} м/с</div>
          <div>{el.parts.day.pressure_mm} мм.рт.ст</div>
        </div>)) }
      </WeatherWrap>
    </Wrapper>
  );
}
