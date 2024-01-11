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
export const ButtonList = styled.button`
  max-width: 180px;
  display: flex;
  justify-content: space-between;
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
export const ProductsList = styled.ul`
  gap: 24px;
  display: flex;
  @media (min-width: 768px) {
  }
`;
export const ProductsItem = styled.li`
  max-width: 282px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
  }
`;
export const ProductsTitle = styled.h3`
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 768px) {
  }
`;
