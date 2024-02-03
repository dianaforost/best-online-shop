import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  position: absolute;
  z-index: 2;
  background-color: ${props => props.theme.header.header_bg_color};
`;

export const Container = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
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

export const HeaderNavMenu = styled.nav``;

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
  transition: 0.3s ease-in-out;
  position: relative;
`;

export const HeaderIconMenuNav = styled.ul`
  display: flex;
`;

export const HeaderIconMenuItem = styled.li`
  margin-right: 24px;
  cursor: pointer;
`;

export const HeaderMenuNavLink = styled(Link)`
  &:hover,
  &:focus,
  &.active {
    color: #17cf97;
  }
  &:hover::after,
  &:focus::after,
  &.active::after {
    content: '';
    width: 50%;
    height: 2px;
    background: #17cf97;
    position: absolute;
    bottom: -10px;
    left: 0px;
  }
`;
