import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const Section = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  @media screen and (min-width: 1200px) {
  }
`;

export const Slide = styled(SwiperSlide)`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  background-position: center;
`;
