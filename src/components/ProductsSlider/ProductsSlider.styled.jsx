import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 100px 0;
  padding: 50px 0 100px;
  @media (min-width: 768px) {
    padding: 100px 0;
  }
`;
export const Container = styled.div`
  padding: 0 28px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    gap: 82px;
    max-width: 1280px;
    padding: 0 40px;
  }
`;
export const Title = styled.h2`
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
  right: 28px;
  position: absolute;
  max-height: 24px;
  &:after {
    content: none;
  }
  @media (min-width: 768px) {
    right: 40px;
  }
`;
export const PrevBtn = styled.button`
  top: auto;
  bottom: -50px;
  width: auto;
  background-color: transparent;
  border: none;
  max-width: 60px;
  left: 28px;
  position: absolute;
  max-height: 24px;
  &:after {
    content: none;
  }
  @media (min-width: 768px) {
    left: 40px;
  }
`;
