import { BannerBottomComponent, BannerTopComponent } from 'components';
import { GenderSection } from 'components/GenderSection/GenderSection';
import { MainSection } from 'components/MainSection/MainSection';
import { ProductsSlider } from 'components/ProductsSlider/ProductsSlider';
import { banner1, banner1x2, banner2, banner2x2 } from 'images';

export const MainPage = () => {
  return (
    <>
      <main>
        <MainSection />
        <GenderSection />
        <BannerTopComponent bannerimg={banner1} bannerimg2x={banner1x2} />
        <ProductsSlider type={'new'} />
        <GenderSection type={'winter'} />
        <BannerBottomComponent bannerimg={banner2} bannerimg2x={banner2x2} />
        <ProductsSlider type={'discount'} />
      </main>
    </>
  );
};
