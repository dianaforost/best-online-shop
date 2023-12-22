import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
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

export const HeaderIconMenuNav = styled.ul`
  display: flex;
`;

export const HeaderIconMenuItem = styled.li`
  margin-right: 24px;
`;
