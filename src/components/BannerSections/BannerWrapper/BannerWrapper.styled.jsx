import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1440px;
  height: 543px;
  margin: 0 auto;
  border: none;
  background-image: url(${props =>
    props.$dpr < 2 ? props.$bannerimg : props.$bannerimg2x});
`;
