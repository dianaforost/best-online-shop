import styled from 'styled-components';
import { Link } from 'react-router-dom';
import forHerFirst from '../../images/for-her-first.png';
import forHerSec from '../../images/for-her-second.png';
import forHimFirst from '../../images/for-him-first.png';
import forHimSec from '../../images/for-him-second.png';
import winterForHer from '../../images/winter-for-her.png';
import winterForHim from '../../images/winter-for-him.png';

export const Section = styled.section`
  width: 100%;
  padding: 100px 0;
  font-family: 'Mulish';
`;

export const Container = styled.div`
  padding-left: 28px;
  padding-right: 28px;
  margin: 0 auto;
  @media (min-width: 768px) {
    gap: 82px;
    max-width: 1200px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const HiddenTitle = styled.h2`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
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
export const List = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const GenderContainer = styled.div`
  width: 588px;
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

export const ForHer = styled(GenderContainer)`
  background-image: url('${forHerFirst}');
  &:hover {
    background-image: url('${forHerSec}');
  }
`;

export const ForHim = styled(GenderContainer)`
  background-image: url('${forHimFirst}');
  &:hover {
    background-image: url('${forHimSec}');
  }
`;
export const WinterForHer = styled(GenderContainer)`
  background-image: url('${winterForHer}');
`;

export const WinterForHim = styled(GenderContainer)`
  background-image: url('${winterForHim}');
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
