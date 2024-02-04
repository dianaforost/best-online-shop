import React, { useEffect } from 'react';
import { BannerWrapper } from 'components';

export const BannerTopComponent = ({ bannerimg, bannerimg2x }) => {
  const dpr = window.devicePixelRatio;
  return (
    <BannerWrapper dpr={dpr} bannerimg={bannerimg} bannerimg2x={bannerimg2x}>
      BannerTopComponent
    </BannerWrapper>
  );
};
