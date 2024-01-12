import {
  LinkTo,
  ProductContainer,
  ProductContent,
  ProductImage,
  ProductImageWrapper,
  ProductPrice,
  ProductTitle,
} from './ProductComponent.styled';
import image from '../../images/Rectangle.jpg';

export const ProductComponent = ({ item, isCatalogPage }) => {
  return (
    <LinkTo to={`catalog/${item.id}`} $isCatalogPage={isCatalogPage}>
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
  );
};
