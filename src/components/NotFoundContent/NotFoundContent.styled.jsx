import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 128px 0 50px;
  @media (min-width: 768px) {
    padding: 156px 0 100px;
  }
`;
export const Container = styled.div`
  padding-left: 28px;
  padding-right: 28px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  @media (min-width: 768px) {
    max-width: 1280px;
    gap: 24px;
    padding: 0 2px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const Title = styled.h2`
  font-size: 80px;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 120px;
    line-height: 151px;
  }
`;
export const Text = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;
export const LinkTo = styled(Link)`
  padding: 20px 0;
  width: 100%;
  background: ${props => props.theme.main.colorBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
  text-align: center;
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
