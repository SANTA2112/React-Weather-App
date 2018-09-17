import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 4px;
  position: relative;
  padding: 5px;
  display: inline-flex;
  color: #fff;
  background: rgba(0,0,0,.3);
  margin-top: 50px;
`;

export const TextBlock = styled.div`
  &:first-child {
    margin-top: 30px;
  }
`;

export const Text = styled.p``;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WeatherWrap = styled.div`
  display: flex;
  text-align: center;
`;

export const UL = styled.ul`
  list-style: none;
  margin-right: 30px;
  &:first-child {
    margin-left: 10px;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const Date = styled.li`
  margin-bottom: 10px;
  font-family: 'Open Sans Semibold';
`;

export const DayTemp = styled.li`
  font-size: 20px;
  &::after {
    content: ' °С';
  }
`;

export const NightTemp = styled.li`
  font-size: 18px;
  &::after {
    content: ' °С';
  }
`;

export const SmallSpan = styled.span`
  font-size: 14px;
`;

export const BoldSpan = styled.span`
  font-family: 'Open Sans Semibold';
`;
