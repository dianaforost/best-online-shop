import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  background-color: rgba(27, 82, 100, 0.8);
  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: center;
    max-height: 276px;
    padding: 50px 120px 50px 120px;
  }
`;

export const LogoText = styled.span`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Mulish';
  color: #f9f9f9;
  text-transform: uppercase;
  margin-right: 480px;
`;

export const CategoryHeaderText = styled.li`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  color: #f9f9f9;
  font-family: 'Mulish';
  margin-bottom: 16px;
`;

export const CategoryItemText = styled.li`
  display: block;
  color: #f9f9f9;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Mulish';
  margin-bottom: 16px;
  /* Link effect */
  background-image: linear-gradient(to right, #000, #000 50%, #f9f9f9 50%);
  background-size: 200% 100%;
  background-position: -100%;
  position: relative;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  &:before {
    content: '';
    background: #ff0000;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-position: 0;
  }

  &:hover:before {
    width: 100%;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const FooterNavigation = styled.div`
  display: block;
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
  margin-right: 8px;
`;

export const CapitalizeText = styled.span`
  text-decoration: capitalize;
`;
