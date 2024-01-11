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

export const ProductComponent = ({ item }) => {
  return (
    <LinkTo to={`catalog/${item.id}`}>
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
