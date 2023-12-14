import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  /* width: 100%; */
  max-height: 100px;
  padding: 38px 120px;
  background-color: rgba(27, 82, 100, 0.8);
  margin-left: auto;
  margin-right: auto;
`;

export const LogoText = styled.div`
  margin-right: 210px;
  color: #f9f9f9;
  text-decoration: uppercase;
`;

export const HeaderStoreNavMenu = styled.ul`
  display: flex;
  margin-right: 160px;
  color: #f9f9f9;
`;

export const HeaderStoreNavItem = styled.li`
  margin-right: 30px;
  text-transform: uppercase;
  color: #f9f9f9;
`;

export const HeaderIconMenuNav = styled.ul`
  display: flex;
`;

export const HeaderIconMenuItem = styled.li`
  margin-right: 24px;
`;

export const UppercaseText = styled.span`
  text-decoration: uppercase;
`;
