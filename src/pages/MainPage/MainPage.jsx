import { BannerBottomComponent, BannerTopComponent } from 'components';
import { GenderSection } from 'components/GenderSection/GenderSection';
import { MainSection } from 'components/MainSection/MainSection';
import { ProductsSlider } from 'components/ProductsSlider/ProductsSlider';
import { bannerTop, bannerTop2x, bannerBottom, bannerBottom2x } from 'images';

export const MainPage = () => {
  return (
    <>
      <main>
        <MainSection />
        <GenderSection />
        <BannerTopComponent $bannerimg={bannerTop} $bannerimg2x={bannerTop2x} />
        <ProductsSlider type={'new'} />
        <GenderSection type={'winter'} />
        <BannerBottomComponent
          $bannerimg={bannerBottom}
          $bannerimg2x={bannerBottom2x}
        />
        <ProductsSlider type={'discount'} />
      </main>
    </>
  );
};
