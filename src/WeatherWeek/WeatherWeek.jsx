import React from 'react';
import { convertDate } from "../constants";
import { Wrapper, TextBlock, Text, TextWrap, WeatherWrap, Date, DayTemp, NightTemp, UL, SmallSpan, BoldSpan } from "./styled";

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
        <UL key={el.date_ts}>
          <Date>{convertDate(el.date)}</Date>
          <DayTemp>{el.parts.day.temp_min} / {el.parts.day.temp_max}</DayTemp>
          <NightTemp>{el.parts.night.temp_avg}</NightTemp>
          <li><SmallSpan>{el.parts.day.condition}</SmallSpan></li>
          <li><BoldSpan>{el.parts.day.wind_dir}</BoldSpan>: <SmallSpan>{el.parts.day.wind_speed} м/с</SmallSpan></li>
          <li>{el.parts.day.pressure_mm} <SmallSpan>мм.рт.ст</SmallSpan></li>
        </UL>)) }
      </WeatherWrap>
    </Wrapper>
  );
}
