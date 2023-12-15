import { GenderSection } from 'components/GenderSection/GenderSection';
import { ProductsSlider } from 'components/ProductsSlider/ProductsSlider';

export const MainPage = () => {
  return (
    <>
      <main>
        <GenderSection />
        <ProductsSlider type={'new'} />
        <ProductsSlider type={'discounts'} />
      </main>
    </>
  );
};
