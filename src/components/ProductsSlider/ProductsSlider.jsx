import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { Container, Section, NextBtn, PrevBtn } from './ProductsSlider.styled';
import { ProductComponent } from 'components/ProductComponent/ProductComponent';
import Sprite from '../../images/icons/sprint.svg';

export const ProductsSlider = () => {
  const item = {
    id: 12,
    title: 'Жіночі спортивні штани джогери-фіолетовий',
    description: '940 ₴',
  };
  const products = [item, item, item, item, item, item, item];
  return (
    <Section>
      <Container>
        <Swiper
          slidesPerView={2}
          spaceBetween={24}
          navigation={{
            clickable: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
          breakpoints={{
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
        <NextBtn className="swiper-button-next">
          <svg>
            <use href={`${Sprite}#icon-right`}></use>
          </svg>
        </NextBtn>
        <PrevBtn className="swiper-button-prev">
          <svg>
            <use href={`${Sprite}#icon-left`}></use>
          </svg>
        </PrevBtn>
      </Container>
    </Section>
  );
};
