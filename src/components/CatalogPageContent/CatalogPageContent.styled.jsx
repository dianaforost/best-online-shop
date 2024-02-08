import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import forHer from '../../images/for-her.png';
// import forHim from '../../images/for-him.png';
// import novelties from '../../images/novelties.png';
// import all from '../../images/all.png';

import {forHer, forHim, novelties, all} from 'images';


export const Section = styled.section`
  width: 100%;
  padding: 200px 0;
  font-family: 'Mulish';
`;

export const Container = styled.div`
  padding: 0 28px;
  margin: 0 auto;
  @media (min-width: 768px) {
    gap: 82px;
    max-width: 1280px;
    padding: 0 40px;
  }
`;
export const Title = styled.h2`
  font-family: Mulish;
  font-size: 32px;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    margin-bottom: 80px;
  }
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px 24px;
  @media (max-width: 768px) {
    justify-items: center;
    grid-template-columns: repeat(1, 1fr);
  }
`;
const ImageContainer = styled.li`
  max-width: 588px;
  height: 500px;
  transition: all 0.7s ease-out;
  position: relative;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ForHer = styled(ImageContainer)`
  background-image: url('${forHer}');
`;

export const ForHim = styled(ImageContainer)`
  background-image: url('${forHim}');
`;
export const Novelties = styled(ImageContainer)`
  background-image: url('${novelties}');
`;
export const All = styled(ImageContainer)`
  background-image: url('${all}');
`;
export const Btn = styled(Link)`
  width: 48%;
  padding: 20px 0;
  background: #000;
  border: none;
  border-radius: 4px;
  transition: all 0.7s ease-out;

  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;

  position: absolute;
  bottom: 40px;
  left: 25%;
  &:hover {
    color: #000;
    background: #fff;
  }
`;
