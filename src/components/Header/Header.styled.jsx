import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
  position: absolute;
  z-index: 2;
  width: 100%;
  background-color: ${props => props.theme.header.headerBgColor};
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  max-width: 1440px;
  max-height: 100px;
  margin: 0 auto;
  padding: 40px 120px;
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

  color: ${props => props.theme.header.textColor};

  margin-right: 160px;
`;

export const HeaderStoreNavItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const HeaderMenuNavLink = styled(Link)`
  position: relative;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.firstFontFamily};
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.theme.header.textColor};

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.header.linkColor};
  }

  &::after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: -10px;

    display: block;
    width: 50%;
    height: 2px;

    background: ${props => props.theme.header.linkColor};

    transform: scaleX(0);
    transform-origin: center left;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const HeaderIconMenuNav = styled.ul`
  display: flex;
  position: relative;
`;

export const HeaderIconMenuItem = styled.li`
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const HeaderIconMenuButton = styled.button`
  cursor: pointer;
  padding: 0;
  border: none;
  background-color: transparent;

  fill: ${props => props.theme.header.textColor};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: ${props => props.theme.header.linkColor};
    transform: scale(1.1);
  }
`;
