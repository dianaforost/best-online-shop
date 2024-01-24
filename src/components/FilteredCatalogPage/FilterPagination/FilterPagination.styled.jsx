import styled from 'styled-components';

export const ButtonGray = styled.button`
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.filteredCatalog.paginationBlack};

  border: none;
  background-color: transparent;
  padding: 4px 12px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
export const Button = styled.button`
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.filteredCatalog.paginationBlack};

  border: none;
  background: ${props => props.theme.filteredCatalog.paginationGray};
  padding: 4px 12px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
