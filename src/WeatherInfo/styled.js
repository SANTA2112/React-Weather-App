import styled from 'styled-components';

export const Wrapper = styled.div``;

export const City = styled.h2`
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 25px;
`;

export const TepmBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const Temp = styled.div`
  font-size: 56px;
  font-weight: 600;
  position: relative;
  display: flex;
  &::after {
    content: '°С';
    position: absolute;
    font-size: 24px;
    top: 0;
    right: -25px;
  }
`;

export const Average = styled.div`
  font-size: 15px;
  margin-left: 7px;
  &::after {
    content: '°С';
  }
`;

export const WeatherDesc = styled.p``;

export const Humidity = styled.p``;

export const Pressure = styled.p``;

export const Sunrise = styled.p``;

export const Sunset = styled.p``;

export const Cloudiness = styled.p``;

export const Wind = styled.div``;
