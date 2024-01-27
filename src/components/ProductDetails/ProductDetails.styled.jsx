import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Section = styled.section`
  width: 100%;
  padding: 28px 0 50px;
  @media (min-width: 768px) {
    padding: 56px 0 100px;
  }
`;
export const SwiperStyled = styled(Swiper)`
  margin: 0;
  @media (min-width: 900px) {
    height: 444px;
  }
`;
export const Container = styled.div`
  padding-left: 28px;
  padding-right: 28px;
  margin: 0 auto;
  position: relative;
  display: flex;
  gap: 20px;
  flex-direction: column;
  @media (min-width: 768px) {
    max-width: 1280px;
    padding: 0 2px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column-reverse;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  background: ${props => props.theme.main.colorGray};
  height: 140px;
  @media (min-width: 900px) {
    width: 180px;
  }
`;
export const Image = styled.div`
  width: 100%;
  height: 444px;
  background: ${props => props.theme.main.colorGray};
  @media (min-width: 900px) {
    width: 384px;
  }
`;
export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  flex-direction: column;
`;
export const ProductContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const ProductTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 29px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 26px;
    line-height: 33px;
  }
`;
export const ProductId = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${props => props.theme.main.colorLightGray};
`;
export const ProductPrice = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 29px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 26px;
    line-height: 33px;
  }
`;
export const Stars = styled.div`
  display: flex;
  gap: 4px;
`;
export const ButtonToCart = styled.button`
  padding: 20px 0;
  width: 100%;
  background: ${props => props.theme.main.colorBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
  color: ${props => props.theme.main.textColor};
  transition: ${props => props.theme.main.transition};
  border: none;
  border-radius: 4px;
  &:hover {
    color: ${props => props.theme.main.colorBlack};
    background: ${props => props.theme.main.textColor};
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`;
export const ButtonToFav = styled.button`
  padding: 20px 0;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
  transition: ${props => props.theme.main.transition};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.main.colorBlack};
  background: ${props => props.theme.main.textColor};
  color: ${props => props.theme.main.colorBlack};
  &:hover {
    color: ${props => props.theme.main.textColor};
    background: ${props => props.theme.main.colorBlack};
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`;
