import styled from 'styled-components';

import img from '../_assets/images/loading.gif';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: RGB(56, 73, 93);
`;

export const Load = styled.img.attrs({ src: img })``;
