import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  background-color: rgba(27, 82, 100, 0.8);
  padding: 20px 28px 20px 28px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    /* max-height: 276px; */
    padding: 50px 120px 50px 120px;
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
  font-family: 'Mulish';
  color: #f9f9f9;
  text-transform: uppercase;
`;

export const CategoryBlock = styled.ul`
  margin-bottom: 40px;
  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
  }
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
  color: #f9f9f9;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Mulish';
  margin-bottom: 16px;
  cursor: pointer;
  &:hover {
    color: #fff;
    text-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
    transform: scale(1.1);
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
