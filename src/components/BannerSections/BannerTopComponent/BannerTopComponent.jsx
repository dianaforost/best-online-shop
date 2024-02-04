import React, { useEffect } from 'react';
import { BannerWrapper } from 'components';

// console.log(`DPR is ${dpr} dppx`);
// `url(${heroBgFirst}),-webkit-image-set(url(${heroBgFirst}) 1x, url(${heroBgFirst2x}) 2x)`

export const BannerTopComponent = ({ bannerimg, bannerimg2x }) => {
  const dpr = window.devicePixelRatio;
  // useEffect(() => {
  //   const dpr = window.devicePixelRatio;
  //   const img = bannerimg;
  //   if (dpr < 2) {
  //     return bannerimg;
  //   } else return bannerimg2x;
  // }, [bannerimg, bannerimg2x]);

  return (
    <BannerWrapper dpr={dpr} bannerimg={bannerimg} bannerimg2x={bannerimg2x}>
      BannerTopComponent
    </BannerWrapper>
  );
};
