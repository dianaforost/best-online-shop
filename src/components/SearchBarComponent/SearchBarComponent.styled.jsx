import styled from 'styled-components';

export const SearchLabel = styled.label`
  position: absolute;
  top: 30px;
  right: 15px;
  transition: 0.3s ease-in-out;
`;

export const SearchInput = styled.input`
  width: 458px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.main.textColor};
  padding: 0px 8px;
`;
