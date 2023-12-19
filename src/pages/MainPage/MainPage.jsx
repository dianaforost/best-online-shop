import { GenderSection } from 'components/GenderSection/GenderSection';
import { Hero } from 'components/Hero/Hero';
import { ProductsSlider } from 'components/ProductsSlider/ProductsSlider';

export const MainPage = () => {
  return (
    <>
      <main>
        <Hero />
        <GenderSection />
        <ProductsSlider type={'new'} />
        <GenderSection type={'winter'} />
        <ProductsSlider type={'discounts'} />
      </main>
    </>
  );
};
