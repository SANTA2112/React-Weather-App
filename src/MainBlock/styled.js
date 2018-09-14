import styled from 'styled-components';

export const Block = styled.div`
  ${({ image }) => image && `background: url('${image}') center center/cover;`}
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
