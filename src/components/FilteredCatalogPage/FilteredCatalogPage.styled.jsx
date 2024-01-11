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
export const CatalogContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const ButtonList = styled.button`
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  font-size: 26px;
  line-height: 33px;
  @media (min-width: 768px) {
  }
`;
export const CategoriesList = styled.div`
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
  margin-top: ${({ $isVisible }) => ($isVisible ? '20px' : '0')};
  flex-direction: column;
  gap: 20px;
  font-size: 26px;
  line-height: 33px;
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
export const FilterItemSquare = styled.div`
  background: transparent;
  border: 1px solid #000;
  width: 30px;
  height: 30px;
  @media (min-width: 768px) {
  }
`;
