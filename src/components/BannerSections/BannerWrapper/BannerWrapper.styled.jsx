import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1440px;
  height: 543px;
  margin: 0 auto;
  border: none;
  ${props =>
    props.$style
      ? `padding: ${props.$style.paddingTop} ${props.$style.paddingRight} ${props.$style.paddingBottom} ${props.$style.paddingLeft};`
      : `padding: 0px;`}

  ${props =>
    props.$dpr < 2
      ? `background-image: url(${props.$bannerimg});`
      : `background-image: url(${props.$bannerimg2x});`}
`;
