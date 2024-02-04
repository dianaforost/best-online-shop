import styled from 'styled-components';

export const BannerHeader = styled.h2`
  max-width: 620px;
  height: 160px;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.17;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.first};
  color: ${props => props.theme.main.textColor};
`;
