import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.footer.footer_bg_color};
`;

export const Container = styled.div`
  padding: 20px 28px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    max-width: 1440px;
    justify-content: space-between;
    padding: 50px 120px;
    margin: 0 auto;
  }
`;

export const Logo = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
  }
`;

export const LogoText = styled.span`
  font-size: 16px;
  font-weight: 500;
  font-family: ${props => props.theme.fonts.firstFontFamily};
  color: ${props => props.theme.main.textColor};
  text-transform: uppercase;
`;

export const CategoryBlock = styled.ul`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
  }
`;

export const CategoryHeaderText = styled.li`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.main.textColor};
  font-family: ${props => props.theme.fonts.firstFontFamily};
  margin-bottom: 16px;
`;

export const CategoryItemText = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const NavigationLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  font-family: ${props => props.theme.fonts.firstFontFamily};
  cursor: pointer;
  color: ${props => props.theme.main.textColor};

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

export const FooterNavigation = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const InformationMenu = styled.div`
  @media screen and (min-width: 1200px) {
    margin-right: 100px;
  }
`;

export const StoreMenu = styled.div`
  @media screen and (min-width: 1200px) {
    margin-right: 100px;
  }
`;

export const ContactsMenu = styled.div``;

export const ContactsMenuIcon = styled.span`
  width: 24px;
  height: 24px;
  fill: inherit;
  line-height: 0;
  margin-right: 8px;
`;

export const CapitalizeText = styled.span`
  text-decoration: capitalize;
`;

// Contacts menu

export const CategoryItemTextContacts = styled(CategoryItemText)`
  fill: ${props => props.theme.header.textColor};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: ${props => props.theme.header.linkColor};
  }
`;

export const ContactsNavLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  font-family: ${props => props.theme.fonts.firstFontFamily};
  cursor: pointer;
  color: ${props => props.theme.main.textColor};

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
