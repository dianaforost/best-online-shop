import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 200px 0;
`;

export const Container = styled.div`
  padding: 0 28px;
  margin: 0 auto;
  @media (min-width: 768px) {
    gap: 82px;
    max-width: 1280px;
    padding: 0 40px;
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
export const DealsList = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
