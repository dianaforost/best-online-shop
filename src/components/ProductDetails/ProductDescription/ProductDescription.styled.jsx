import styled from 'styled-components';

export const DescriptionBtn = styled.button`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  border: none;
  border-bottom: 1px solid #757575;
  background: transparent;
  padding: 22px 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
  border-top: ${({ $type }) => ($type ? 'none' : '1px solid #757575')};
`;
export const DescriptionList = styled.div`
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
  padding: 5px 10px;
`;
