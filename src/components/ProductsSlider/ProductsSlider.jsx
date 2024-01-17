import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { ProductComponent } from 'components/ProductComponent/ProductComponent';
import { Icon } from 'components/Icon/Icon';

import 'swiper/css';
import 'swiper/css/navigation';
import {
  Container,
  Section,
  NextBtn,
  PrevBtn,
  Title,
} from './ProductsSlider.styled';

export const ProductsSlider = ({ type }) => {
  const products = [
    {
      id: 1,
      title: 'Жіночі спортивні штани джогери-фіолетовий',
      price: '940 ₴',
    },
    {
      id: 2,
      title: 'Жіночі спортивні штани джогери-фіолетовий',
      price: '940 ₴',
    },
    {
      id: 3,
      title: 'Жіночі спортивні штани джогери-фіолетовий',
      price: '940 ₴',
    },
    {
      id: 4,
      title: 'Жіночі спортивні штани джогери-фіолетовий',
      price: '940 ₴',
    },
    {
      id: 5,
      title: 'Жіночі спортивні штани джогери-фіолетовий',
      price: '940 ₴',
    },
    {
      id: 6,
      title: 'Жіночі спортивні штани джогери-фіолетовий',
      price: '940 ₴',
    },
    {
      id: 7,
      title: 'Жіночі спортивні штани джогери-фіолетовий',
      price: '940 ₴',
    },
  ];
  const navigationClass = `${
    type === 'new' ? 'new' : type === 'discount' ? 'discount' : 'recently'
  }-swiper-navigation`;

  return (
    <Section>
      <Container>
        <Title>
          {type === 'new'
            ? 'Новинки'
            : type === 'discount'
            ? 'Знижки'
            : 'Нещодавно переглянуті'}
        </Title>
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
              <ProductComponent
                item={item}
                sectionType={
                  type === 'new'
                    ? 'new'
                    : type === 'discount'
                    ? 'discount'
                    : 'recently'
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <NextBtn className={`${navigationClass}-next`}>
          <Icon id={'arrow-right'} width="60" height="24" />
        </NextBtn>
        <PrevBtn className={`${navigationClass}-prev`}>
          <Icon id={'arrow-left'} width="60" height="24" />
        </PrevBtn>
      </Container>
    </Section>
  );
};
