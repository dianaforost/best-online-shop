import React from 'react';
import { BannerWrapper } from '../BannerWrapper/BannerWrapper';

export const BannerBottomComponent = props => {
  return (
    <BannerWrapper
      {...props}
      $style={{
        paddingTop: '40px',
        paddingRight: '16px',
        paddingBottom: '120px',
        paddingLeft: '96px',
      }}
    >
      <div>
        <p> -20% </p>
        <h2> Знижки </h2>
        <p> -50% </p>
        <p> -30% </p>
        <h3>Купуй та вигравай приємні подарунки</h3>
      </div>
    </BannerWrapper>
  );
};
