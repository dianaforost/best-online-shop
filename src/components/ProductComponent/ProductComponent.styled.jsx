import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkTo = styled(Link)`
  max-width: ${({ $isCatalogPage }) => ($isCatalogPage ? '282px' : 'none')};
  display: inline-block;
`;
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ProductImageWrapper = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
`;
export const ProductImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
`;
export const ProductContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${props => props.theme.main.colorBlack};
`;
export const ProductPrice = styled.p`
  font-size: 16px;
  color: ${props => props.theme.main.colorBlack};
`;
