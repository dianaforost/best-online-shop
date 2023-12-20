import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { ProductComponent } from 'components/ProductComponent/ProductComponent';
import { IconSwiperLeft } from 'components/IconSwiperLeft/IconSwiperLeft';
import { IconSwiperRight } from 'components/IconSwiperRight/IconSwiperRight';

import 'swiper/css';
import 'swiper/css/navigation';
import {
  Container,
  Section,
  NextBtn,
  PrevBtn,
  Title,
} from './ProductsSlider.styled';
import { useEffect } from 'react';
import { getProducts } from '../../redux/products/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectNewProducts } from '../../redux/products/selectors';

export const ProductsSlider = ({ type }) => {
  const dispatch = useDispatch();
  const product = useSelector(selectNewProducts) || [];
  console.log(product);
  const item = {
    id: 12,
    title: 'Жіночі спортивні штани джогери-фіолетовий',
    description: '940 ₴',
  };
  console.log(useSelector(state => state.products.products));
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const products = [item, item, item, item, item, item, item];
  const navigationClass = `${
    type === 'new' ? 'new' : 'discount'
  }-swiper-navigation`;

  return (
    <Section>
      <Container>
        <Title>{type === 'new' ? 'Новинки' : 'Знижки'}</Title>
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          navigation={{
            clickable: true,
            nextEl: `.${navigationClass}-next`,
            prevEl: `.${navigationClass}-prev`,
          }}
          modules={[Navigation]}
          breakpoints={{
            375: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductComponent item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <NextBtn className={`${navigationClass}-next`}>
          <IconSwiperRight />
        </NextBtn>
        <PrevBtn className={`${navigationClass}-prev`}>
          <IconSwiperLeft />
        </PrevBtn>
      </Container>
    </Section>
  );
};
