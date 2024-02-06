import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Sale = styled.h2`
  font-family: ${props => props.theme.fonts.first};
  color: ${props => props.theme.main.textColor};
  line-height: 1.17;
  font-size: 64px;
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 96px;
  margin-bottom: 44px;
`;

export const BuyAndWin = styled.h2`
  font-family: ${props => props.theme.fonts.first};
  color: ${props => props.theme.main.textColor};
  line-height: 1.17;
  font-size: 32px;
  font-weight: 500;
`;

export const Minus50 = styled.h3`
  font-family: ${props => props.theme.fonts.first};
  color: ${props => props.theme.main.textColor};
  line-height: 1.17;
  font-size: 64px;
  font-weight: 600;
  margin-left: 178px;
  margin-bottom: 44px;
`;

export const Minus20 = styled.h3`
  font-family: ${props => props.theme.fonts.first};
  color: ${props => props.theme.main.textColor};
  line-height: 1.17;
  font-size: 46px;
  font-weight: 500;
  margin-top: 70px;
  margin-left: 368px;
  margin-bottom: 24px;
`;

export const Minus10 = styled.h3`
  font-family: ${props => props.theme.fonts.first};
  color: ${props => props.theme.main.textColor};
  line-height: 1.17;
  font-size: 32px;
  font-weight: 500;
  margin-left: 318px;
`;

export const BuyAndWinContainer = styled.div`
  width: 310px;
  text-align: center;
  margin-top: 232px;
  margin-right: 16px;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SaleLink = styled(Link)`
  &:hover,
  &:focus {
    color: #17cf97;
  }
  transition: ${props => props.theme.main.transition};
`;
