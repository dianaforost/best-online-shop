import styled from 'styled-components';

export const Container = styled.section`
  max-width: ${props => props.theme.main.siteWidth};
  height: 543px;
  margin: 0 auto;
  border: none;
  /* padding */
  ${props =>
    props.$style
      ? `padding: ${props.$style.paddingTop} ${props.$style.paddingRight} ${props.$style.paddingBottom} ${props.$style.paddingLeft};`
      : `padding: 0px;`}
  /* background-image */
  ${props =>
    props.$dpr < 2
      ? `background-image: url(${props.$bannerimg});`
      : `background-image: url(${props.$bannerimg2x});`}
`;
