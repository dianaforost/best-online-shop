import styled from 'styled-components';

export const List = styled.div`
  width: ${({ $type }) => ($type ? '100%' : '')};
  @media (min-width: 768px) {
    width: ${({ $type }) => ($type ? '50%' : '')};
  }
`;
export const ButtonList = styled.button`
  width: ${({ $type }) => ($type ? '100%' : '180px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  font-size: ${({ $type }) => ($type ? '16px' : '26px')};
  line-height: ${({ $type }) => ($type ? '20px' : '33px')};
  border: ${({ $type, theme }) =>
    $type ? `1px solid ${theme.main.colorBlack}` : 'none'};
  padding: ${({ $type }) => ($type ? '10px' : 'none')};
  text-transform: ${({ $type }) => ($type ? 'uppercase' : 'capitalize')};
`;
export const CategoriesList = styled.ul`
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
  border: 1px solid ${props => props.theme.main.colorBlack};
  border-radius: ${({ $type }) => ($type ? '50%' : '0')};
  width: ${({ $type }) => ($type ? '24px' : '30px')};
  height: ${({ $type }) => ($type ? '24px' : '30px')};
  background: ${props => (props.checked ? 'gray' : 'transparent')};
  @media (min-width: 768px) {
  }
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  border: ${({ $type, theme }) =>
    $type ? `1px solid ${theme.main.colorBlack}` : 'none'};
  padding: ${({ $type }) => ($type ? '10px' : '0')};
  cursor: pointer;
`;
export const Item = styled.p`
  font-size: ${({ $type }) => ($type ? '16px' : '26px')};
  line-height: ${({ $type }) => ($type ? '20px' : '33px')};
  text-transform: ${({ $type }) => ($type ? 'uppercase' : 'capitalize')};
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
export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
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
