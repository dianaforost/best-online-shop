import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: center;
  max-height: 100px;
  padding: 38px 120px;
  background: rgba(27, 82, 100, 0.8);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border: 1px solid rgba(27, 82, 100, 0.19);
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
