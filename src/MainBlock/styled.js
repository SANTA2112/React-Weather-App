import styled from 'styled-components';

export const Block = styled.div`
  ${({ image }) => image && `background: url('${image}') center center/cover;`}
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  &::before {
    content: '';
    background: rgba(0,0,0,.3);
    height: 100%;
    width: 100%;
    display: block;
  }
`;
