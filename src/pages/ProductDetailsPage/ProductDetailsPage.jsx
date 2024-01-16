import { ProductDetails } from 'components/ProductDetails/ProductDetails';
import { ProductsSlider } from 'components/ProductsSlider/ProductsSlider';
import { useParams } from 'react-router-dom';

export const ProductDetailsPage = () => {
  const { productsId } = useParams();
  return (
    <>
      <ProductDetails productsId={productsId} />
      <ProductsSlider type={'recently'} />
    </>
  );
};
