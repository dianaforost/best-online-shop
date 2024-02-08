import {
  LinkTo,
  ProductContainer,
  ProductContent,
  ProductImage,
  ProductImageWrapper,
  ProductPrice,
  ProductTitle,
} from './ProductComponent.styled';
import { image } from 'images';
import { useLocation } from 'react-router-dom';

export const ProductComponent = ({ item, isCatalogPage, sectionType }) => {
  const location = useLocation();
  return (
    <>
      <LinkTo
        to={
          sectionType === 'new'
            ? `catalog/novelty/${item.id}`
            : sectionType === 'discount'
            ? `deals/${item.id}`
            : sectionType === 'recently'
            ? `/catalog/all/${item.id}`
            : `${location.pathname}/${item.id}`
        }
        $isCatalogPage={isCatalogPage}
      >
        <ProductContainer>
          <ProductImageWrapper>
            <ProductImage src={image} />
          </ProductImageWrapper>

          <ProductContent>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.price}</ProductPrice>
          </ProductContent>
        </ProductContainer>
      </LinkTo>
    </>
  );
};
