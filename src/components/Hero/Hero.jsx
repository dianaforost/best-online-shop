import './slide.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Autoplay, EffectFade, Pagination, Mousewheel } from 'swiper/modules';

export const Hero = () => {
  return (
    <div className="swiper-wripper">
      <Swiper
        slidesPerView={1}
        effect={'fade'}
        mousewheel={false}
        loop={true}
        centeredSlides={true}
        direction={'vertical'}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          dynamicBullets: false,
          clickable: true,

          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '">' +
              (
                <img
                  src="https://icons8.com/icon/UCuelR34zFCJ/bullet"
                  alt="pic-bullet"
                />
              ) +
              '</span>'
            );
          },
        }}
        modules={[Autoplay, EffectFade, Pagination, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="pic-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="pic-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="pic-3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="pic-4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
