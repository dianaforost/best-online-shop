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
  @media (min-width: 768px) {
    gap: 82px;
    max-width: 1200px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  media (min-width: 768px) {
    margin-bottom: 80px;
  }
`;
export const Title = styled.h2`
  font-family: Mulish;
  font-size: 32px;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  @media (min-width: 768px) {
  }
`;
export const CatalogContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ProductsList = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const FilterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 768px) {
  }
`;
export const Results = styled.p`
  font-size: 18px;
  line-height: normal;
  text-align: end;
`;
export const NextButton = styled.button`
  background-color: transparent;
  border: none;
`;
