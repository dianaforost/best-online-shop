import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import {
  Container,
  Section,
  NextBtn,
  PrevBtn,
  Title,
} from './ProductsSlider.styled';
import { ProductComponent } from 'components/ProductComponent/ProductComponent';
import Sprite from '../../images/icons/sprint.svg';

export const ProductsSlider = ({ type }) => {
  const item = {
    id: 12,
    title: 'Жіночі спортивні штани джогери-фіолетовий',
    description: '940 ₴',
  };
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
          <svg style={{ width: '100%', maxHeight: '24' }}>
            <use href={`${Sprite}#icon-right`}></use>
          </svg>
        </NextBtn>
        <PrevBtn className={`${navigationClass}-prev`}>
          <svg style={{ width: '100%', maxHeight: '24' }}>
            <use href={`${Sprite}#icon-left`}></use>
          </svg>
        </PrevBtn>
      </Container>
    </Section>
  );
};
