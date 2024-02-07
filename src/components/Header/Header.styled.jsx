import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  position: absolute;
  z-index: 2;
  background-color: ${props => props.theme.header.headerBgColor};
`;

export const Container = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  max-height: 100px;
  padding: 38px 120px;
  background-color: ${props => props.theme.header.headerBgColor};
`;

export const LogoText = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-family: ${props => props.theme.fonts.firstFontFamily};
  color: ${props => props.theme.header.textColor};
  text-transform: uppercase;
  margin-right: 210px;
`;

export const HeaderNavMenu = styled.nav``;

export const HeaderStoreNavMenu = styled.ul`
  display: flex;

  margin-right: 160px;
  color: ${props => props.theme.header.textColor};
`;

export const HeaderStoreNavItem = styled.li`
  font-size: 16px;
  font-family: ${props => props.theme.fonts.firstFontFamily};
  font-weight: 500;
  margin-right: 30px;
  text-transform: uppercase;
  color: ${props => props.theme.header.textColor};
  position: relative;
`;

export const HeaderIconMenuNav = styled.ul`
  display: flex;
  position: relative;
`;

export const HeaderIconMenuItem = styled.li`
  margin-right: 24px;
  cursor: pointer;
`;

export const HeaderMenuNavLink = styled(Link)`
  transition: ${props => props.theme.header.transition};
  &:hover,
  &:focus,
  &.active {
    color: ${props => props.theme.header.linkColor};
  }
  &:hover::after,
  &:focus::after,
  &.active::after {
    content: '';
    width: 50%;
    height: 2px;
    background: ${props => props.theme.header.linkColor};
    position: absolute;
    bottom: -10px;
    left: 0px;
  }
`;
