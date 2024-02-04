import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1440px;
  height: 543px;
  margin: 0 auto;
  border: ${props => console.log(props)};
  padding-top: ${props => props.style.paddingTop};
  padding-right: ${props => props.style.paddingRight};
  padding-bottom: ${props => props.style.paddingBottom};
  padding-left: ${props => props.style.paddingLeft};
  background-image: url(${props =>
    props.$dpr < 2 ? props.$bannerimg : props.$bannerimg2x});
`;
