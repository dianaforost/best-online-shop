import { Link } from "react-router-dom";
import {
  ProductContainer,
  ProductContent,
  ProductImage,
  ProductImageWrapper,
  ProductPrice,
  ProductTitle,
} from "./ProductComponent.styled";
import image from "../../images/Rectangle.jpg";

export const ProductComponent = ({ item }) => {
  return (
    <Link to={`catalog/${item.id}`}>
      <ProductContainer>
        <ProductImageWrapper>
          <ProductImage src={image} />
        </ProductImageWrapper>

        <ProductContent>
          <ProductTitle>{item.title}</ProductTitle>
          <ProductPrice>{item.description}</ProductPrice>
        </ProductContent>
      </ProductContainer>
    </Link>
  );
};
