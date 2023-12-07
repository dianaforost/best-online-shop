import styled from "styled-components";
import { Link } from "react-router-dom";
import forHerFirst from "../../images/for-her-first.png";
import forHerSec from "../../images/for-her-second.png";
import forHimFirst from "../../images/for-him-first.png";
import forHimSec from "../../images/for-him-second.png";

export const Section = styled.section`
  width: 100%;
  padding: 100px 0;
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
export const Title = styled.h2`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
export const List = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ForHer = styled.div`
  width: 588px;
  height: 500px;
  transition: all 0.7s ease-out;
  position: relative;
  background-image: url("${forHerFirst}");
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    background-image: url("${forHerSec}");
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ForHim = styled.div`
  width: 588px;
  height: 500px;
  transition: all 0.7s ease-out;
  position: relative;
  background-image: url("${forHimFirst}");
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    background-image: url("${forHimSec}");
  }
  @media (max-width: 768px) {
    width: 100%;
  }
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
