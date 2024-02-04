import React from 'react';
import { Swiper } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Section, Slide } from './BannerImage.styled';

import { banner1, banner1x2, banner2, banner2x2 } from 'images/';

export const BannerImage = () => {
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
          <Slide
            key={index}
            style={{
              backgroundImage: item,
            }}
          ></Slide>
        ))}
      </Swiper>
    </Section>
  );
};
