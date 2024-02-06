import React from 'react';
import { BannerWrapper } from '../BannerWrapper/BannerWrapper';
import {
  BuyAndWin,
  BuyAndWinContainer,
  Minus10,
  Minus20,
  Minus50,
  Sale,
  SaleLink,
  TextContainer,
} from './BannerBottomComponent.styled';

export const BannerBottomComponent = props => {
  return (
    <BannerWrapper
      {...props}
      // $style={{
      //   paddingTop: '70px',
      //   paddingRight: '16px',
      //   paddingBottom: '120px',
      //   paddingLeft: '96px',
      // }}
    >
      <TextContainer>
        <div>
          <Minus20> -20% </Minus20>
          <Sale>
            <SaleLink to={'/deals'}>ЗНИЖКИ</SaleLink>
          </Sale>
          <Minus50> -50% </Minus50>
          <Minus10> -10% </Minus10>
        </div>
        <BuyAndWinContainer>
          <BuyAndWin>Купуй та вигравай приємні подарунки</BuyAndWin>
        </BuyAndWinContainer>
      </TextContainer>
    </BannerWrapper>
  );
};
