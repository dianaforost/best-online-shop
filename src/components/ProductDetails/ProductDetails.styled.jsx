import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 56px 0 100px;
  font-family: 'Mulish';
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
    flex-direction: row;
    max-width: 1200px;
    padding: 0 2px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const ImageContainer = styled.div`
  background: #d9d9d9;
  width: 180px;
  height: 140px;
`;
export const Image = styled.div`
  width: 384px;
  height: 444px;
  background: #d9d9d9;
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
  font-size: 26px;
  font-weight: 500;
  line-height: 33px;
  text-transform: uppercase;
`;
export const ProductId = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #6d6d6d;
`;
export const ProductPrice = styled.p`
  font-size: 26px;
  font-weight: 500;
  line-height: 33px;
  text-transform: uppercase;
`;
export const Stars = styled.div`
  display: flex;
  gap: 4px;
`;
export const ButtonToCart = styled.button`
  padding: 20px 0;
  width: 50%;
  background: #0d0c0b;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
  color: #fff;
  transition: all 0.7s ease-out;
  border: none;
  border-radius: 4px;
  &:hover {
    color: #0d0c0b;
    background: #fff;
  }
`;
export const ButtonToFav = styled.button`
  padding: 20px 0;
  width: 50%;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
  transition: all 0.7s ease-out;
  border-radius: 4px;
  border: 1px solid #000;
  background: #fff;
  color: #0d0c0b;
  &:hover {
    color: #fff;
    background: #0d0c0b;
  }
`;
