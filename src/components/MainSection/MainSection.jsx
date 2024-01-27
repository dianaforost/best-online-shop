import { useState } from 'react';
import { Swiper } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';

import {
  Container,
  LinkTo,
  Section,
  Slide,
  Text,
  Title,
} from './MainSection.styled';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import heroBgFirst from '../../images/Hero/hero-bg-first.jpg';
import heroBgFirst2x from '../../images/Hero/hero-bg-first@2x.jpg';
import heroBgSec from '../../images/Hero/hero-bg-sec.jpg';
import heroBgSec2x from '../../images/Hero/hero-bg-sec@2x.jpg';
import heroBgThird from '../../images/Hero/hero-bg-third.jpg';
import heroBgThird2x from '../../images/Hero/hero-bg-third@2x.jpg';

export const MainSection = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  console.log(currentSlideIndex);
  const handleSlideChange = index => {
    setCurrentSlideIndex(index);
  };
  const backgroundImages = [
    `url(${heroBgFirst}),-webkit-image-set(url(${heroBgFirst}) 1x, url(${heroBgFirst2x}) 2x, url(${heroBgFirst}) 1x, url(${heroBgFirst2x}) 2x)`,
    `url(${heroBgSec}),-webkit-image-set(url(${heroBgSec}) 1x, url(${heroBgSec2x}) 2x, url(${heroBgSec}) 1x, url(${heroBgSec2x}) 2x)`,
    `url(${heroBgThird}),-webkit-image-set(url(${heroBgThird}) 1x, url(${heroBgThird2x}) 2x, url(${heroBgThird}) 1x, url(${heroBgThird2x}) 2x)`,
  ];
  return (
    <Section>
      <Swiper
        style={{
          height: 1024,
        }}
        slidesPerView={1}
        effect="fade"
        modules={[Pagination, EffectFade, Autoplay]}
        fadeEffect={{ crossFade: true }}
        direction={'vertical'}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}" style="margin: 8px 0; width:24px; height:24px; border: 1px solid #F9F9F9;"></span>`;
          },
        }}
        onSlideChange={swiper => {
          handleSlideChange(swiper.realIndex);
        }}
      >
        {backgroundImages.map((item, index) => (
          <Slide
            key={index}
            style={{
              backgroundImage: item,
            }}
          >
            <Container>
              <Title>SportSvit</Title>
              <Text>
                Енергія в стилі, сила в кожному шовку – вибери свій шлях до
                перемоги!
              </Text>
              <LinkTo to="/catalog">Перейти до покупок</LinkTo>
            </Container>
          </Slide>
        ))}
      </Swiper>
    </Section>
  );
};
