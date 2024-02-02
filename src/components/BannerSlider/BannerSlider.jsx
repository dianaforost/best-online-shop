import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../images/banner/banner1.jpg';
import banner1x2 from '../../images/banner/banner1.jpg';
import banner2 from '../../images/banner/banner2.jpg';
import banner2x2 from '../../images/banner/banner2@2x.jpg';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Section } from './BannerSlider.styled';

export const BannerSlider = () => {
  const bgImages = [
    `url(${banner1}),-webkit-image-set(url(${banner1}) 1x, url(${banner1x2}) 2x`,
    `url(${banner2}),-webkit-image-set(url(${banner2}) 1x, url(${banner2x2}) 2x`,
  ];

  return (
    <Section>
      <Swiper
        style={{ height: '543px' }}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        loop={true}
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {bgImages.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: item,
            }}
          ></SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
