import React from 'react';
import { BannerWrapper } from 'components';
import { BannerHeader } from './BannerTopComponent.styled';

export const BannerTopComponent = props => {
  return (
    <BannerWrapper
      {...props}
      $style={{
        paddingTop: '192px',
        paddingRight: '700px',
        paddingBottom: '192px',
        paddingLeft: '120px',
      }}
    >
      <BannerHeader>
        Дотримуючись традицій,
        <br /> творимо моду майбутнього: <br /> український одяг з власних рук{' '}
        <br />
        до серця світу
      </BannerHeader>
    </BannerWrapper>
  );
};
