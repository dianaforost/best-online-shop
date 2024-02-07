import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 76px;
  text-align: center;
  background-color: ${props => props.theme.header.headerBgColor};
  border-top: 2px solid ${props => props.theme.header.headerBorderColor};
`;

export const SearchLabel = styled.label`
  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background-color: red;
  }
`;

export const SearchInput = styled.input`
  width: 458px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.main.textColor};
  padding: 0px 8px;
  margin: 0 auto;
`;
