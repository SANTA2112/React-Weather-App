import React from 'react';
import styled from 'styled-components';

const Hello = styled.div`
  font-size: 24px;
  color: #10a1e2;
  text-align: center;
  font-weight: bold;
`;

export default () => (
  <div>
    <Hello>Hello React!</Hello>
  </div>
);
