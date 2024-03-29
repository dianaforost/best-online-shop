import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  z-index: 2;
  width: 100%;
  text-align: center;
  background-color: ${props => props.theme.header.headerBgColor};
  border-top: 2px solid ${props => props.theme.header.headerBorderColor};
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 18px 491px;
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

export const SearchInput = styled.input`
  display: block;
  font-family: ${props => props.theme.fonts.firstFontFamily};
  font-size: 16px;

  width: 100%;
  height: 100%;
  padding: 10px 8px 10px 40px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.main.textColor};
  background-clip: padding-box;

  color: ${props => props.theme.header.textColor};
  background-color: transparent;

  &::placeholder {
    font-family: ${props => props.theme.fonts.firstFontFamily};
    font-weight: 400;
    font-size: 16px;
    color: ${props => props.theme.main.textColor};
    opacity: 0.8;
  }

  &:auto-fill {
  }

  &:hover,
  &:focus {
    background-color: transparent;
    outline: 0;
  }
`;
