import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  z-index: 9;
  width: 100%;
  display: flex;
  justify-content: center;
  max-height: 100px;
  padding: 38px 120px;
  background-color: ${props => props.theme.header.header_bg_color};
`;

export const LogoText = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-family: ${props => props.theme.fonts.firstFontFamily};
  color: ${props => props.theme.main.textColor};
  text-transform: uppercase;
  margin-right: 210px;
`;

export const HeaderStoreNavMenu = styled.ul`
  display: flex;
  margin-right: 160px;
  color: ${props => props.theme.main.textColor};
`;

export const HeaderStoreNavItem = styled.li`
  font-size: 16px;
  font-family: ${props => props.theme.fonts.firstFontFamily};
  font-weight: 500;
  margin-right: 30px;
  text-transform: uppercase;
  color: ${props => props.theme.main.textColor};
`;

export const HeaderIconMenuNav = styled.ul`
  display: flex;
`;

export const HeaderIconMenuItem = styled.li`
  margin-right: 24px;
`;
