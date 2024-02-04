import React from 'react';

import { Container } from './BannerWrapper.styled';

export const BannerWrapper = ({ children, bannerimg, bannerimg2x, dpr }) => {
  return (
    <Container $bannerimg={bannerimg} $bannerimg2x={bannerimg2x} $dpr={dpr}>
      {children}
    </Container>
  );
};
