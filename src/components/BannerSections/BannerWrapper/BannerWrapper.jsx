import React from 'react';

import { Container } from './BannerWrapper.styled';

export const BannerWrapper = ({ children, ...props }) => {
  const dpr = window.devicePixelRatio;
  return (
    <Container $dpr={dpr} {...props}>
      {children}
    </Container>
  );
};
