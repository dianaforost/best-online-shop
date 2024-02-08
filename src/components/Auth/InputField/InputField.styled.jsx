import styled from 'styled-components';

export const Input = styled.input`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  padding: 15px 32px 15px 8px;
  width: 100%;
  max-width: 384px;
  border: 1px solid #757575;
  border-color: ${props => (props.$error ? 'red' : '#757575')};
`;
export const ErrorMessage = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #cd1106;
`;
