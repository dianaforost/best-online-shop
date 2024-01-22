import styled from 'styled-components';

export const DescriptionBtn = styled.button`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  border: none;
  border-bottom: 1px solid ${props => props.theme.main.colorDarkGray};
  background: transparent;
  padding: 22px 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
  border-top: ${({ $type, theme }) =>
    $type ? 'none' : `1px solid ${theme.main.colorDarkGray}`};
`;
export const DescriptionList = styled.div`
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
  padding: 5px 10px;
`;
