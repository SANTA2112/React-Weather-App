import React from 'react';
import { Wrapper, TextBlock, Text, TextWrap } from "./styled";

export default ({ weatherOnWeek }) => (
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
  </Wrapper>
);
