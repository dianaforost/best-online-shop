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
  padding: 18px 491px;
`;

export const SearchInput = styled.input`
  font-family: ${props => props.theme.fonts.firstFontFamily};
  font-size: 16px;

  width: 100%;
  height: 100%;
  padding: 0px 8px 0px 40px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.main.textColor};
  background-color: transparent;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 458px;
  height: 40px;
`;

export const SearchButton = styled.button`
  display: block;
  line-height: 0;
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  padding: 0;
  fill: ${props => props.theme.header.textColor};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: ${props => props.theme.header.linkColor};
  }
`;
