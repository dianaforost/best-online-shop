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
    padding: 0;
  }
`;
export const Title = styled.h2`
  font-family: Mulish;
  font-size: 32px;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    margin-bottom: 80px;
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
  position: absolute;
  max-height: 24px;
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
  position: absolute;
  max-height: 24px;
  &:after {
    content: none;
  }
`;
