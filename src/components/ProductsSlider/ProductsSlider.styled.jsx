import styled from 'styled-components';
export const Section = styled.section`
  width: 100%;
  padding: 100px 0;
  font-family: 'Mulish';
`;
export const Container = styled.div`
  padding-left: 28px;
  padding-right: 28px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    gap: 82px;
    max-width: 1200px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const NextBtn = styled.button`
  top: auto;
  bottom: -50px;
  width: auto;
  background-color: transparent;
  border: none;
  max-width: 60px;
  right: 40px;
  &:after {
    content: none;
  }
`;
export const PrevBtn = styled.button`
  top: auto;
  bottom: -50px;
  width: auto;
  background-color: transparent;
  border: none;
  max-width: 60px;
  left: 40px;
  &:after {
    content: none;
  }
`;
