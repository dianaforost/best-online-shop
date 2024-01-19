import styled from 'styled-components';

export const Container = styled.header`
  /* display: flex; */
  display: none;
  justify-content: center;
  max-height: 100px;
  padding: 38px 120px;
  background-color: rgba(27, 82, 100, 0.8);
`;

export const LogoText = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Mulish';
  color: #f9f9f9;
  text-transform: uppercase;
  margin-right: 210px;
`;

export const HeaderStoreNavMenu = styled.ul`
  display: flex;
  margin-right: 160px;
  color: #f9f9f9;
`;

export const HeaderStoreNavItem = styled.li`
  font-size: 16px;
  font-family: 'Mulish';
  font-weight: 500;
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
