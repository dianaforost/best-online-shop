import styled from 'styled-components';

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
export const FilterItemSquare = styled.div`
  background: transparent;
  border: 1px solid #000;
  width: 30px;
  height: 30px;
  @media (min-width: 768px) {
  }
`;
