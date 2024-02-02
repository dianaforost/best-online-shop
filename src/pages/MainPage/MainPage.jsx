import { BannerSlider } from 'components/BannerSlider/BannerSlider';
import { GenderSection } from 'components/GenderSection/GenderSection';
import { MainSection } from 'components/MainSection/MainSection';
import { ProductsSlider } from 'components/ProductsSlider/ProductsSlider';

export const MainPage = () => {
  return (
    <>
      <main>
        <MainSection />
        <GenderSection />
        <ProductsSlider type={'new'} />
        <GenderSection type={'winter'} />
        <BannerSlider />
        <ProductsSlider type={'discount'} />
      </main>
    </>
  );
};
