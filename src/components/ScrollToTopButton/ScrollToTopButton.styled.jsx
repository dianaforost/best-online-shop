import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 10000;
  bottom: 50px;
  right: 50px;
  background-color: green;
  width: 150px;
  height: 50px;
  border-radius: 4px;
`;

export const Button = styled.button`
  font-size: 24px;
  width: 100%;
  height: 100%;
  color: red;
  background-color: inherit;
  border: none;
  line-height: 0;
`;
