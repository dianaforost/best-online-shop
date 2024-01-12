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
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  width: 30px;
  height: 30px;
  background: ${props => (props.checked ? 'gray' : 'transparent')};
  @media (min-width: 768px) {
  }
`;
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  -webkit-appearance: none;
  width: 30px;
  height: 30px;
  border: 0;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  cursor: pointer;
`;
