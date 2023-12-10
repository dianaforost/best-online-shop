import { Link } from "react-router-dom";
import {
  ProductContainer,
  ProductContent,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "./ProductComponent.styled";

export const ProductComponent = ({ item }) => {
  return (
    <Link to={`catalog/${item.id}`}>
      <ProductContainer>
        <ProductImage />
        <ProductContent>
          <ProductTitle>{item.title.slice(0, 25)}...</ProductTitle>
          <ProductPrice>{item.description}</ProductPrice>
        </ProductContent>
      </ProductContainer>
    </Link>
  );
};
