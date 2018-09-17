import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #000;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const Input = styled.input`
  padding: 3px 0 3px 5px;
  border: none;
  background-color: rgba(255,255,255,.8);
  &:focus {
    background-color: #fff;
  }
`;
export const SearchButton = styled.button`
  color: rgba(255,255,255,.8);
  padding: 2px 10px;
  border: 1px solid #fff;
  border-left: none;
  background-color: #000;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

export const Wrap = styled.div`
  position: relative;
`;

export const History = styled.datalist``;

export const HistoryItem = styled.option`
  padding: 5px 10px;
  color: #000;
`;
