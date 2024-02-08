import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  transition: all 0.3s ease-in-out;
  background: #fff;
  padding: 40px 60px;
  position: relative;
`;
export const CloseButton = styled.button`
  z-index: 10;
  position: absolute;
  right: 60px;
  top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
    right: 44px;
    top: 24px;
  }
`;
export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AuthNav = styled.ul`
  display: flex;
  gap: 32px;
`;
export const AuthLinks = styled.li`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
`;
export const AuthButtons = styled.button`
  background: transparent;
  border: none;
  border-bottom: ${props => (props.$isActive ? '1px solid #0D0C0B' : 'none')};
`;
export const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 32px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 384px;
`;
export const FormItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;
export const InputWrapper = styled.div`
  position: relative;
`;
export const CheckboxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  -webkit-appearance: none;
  width: 30px;
  height: 30px;
  border: 0;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  cursor: pointer;
`;
export const FilterItemSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.main.colorBlack};
  width: 30px;
  height: 30px;
  background: ${props => (props.checked ? 'gray' : 'transparent')};
  @media (min-width: 768px) {
  }
`;
export const Button = styled.button`
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
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  background: transparent;
  display: ${p => (p.$isCategoriesShown ? `flex` : `none`)};
`;
export const Item = styled.li`
  padding: 15px 32px 15px 8px;
  border-bottom: 1px solid #757575;
  border-left: 1px solid #757575;
  border-right: 1px solid #757575;
  @media (min-width: 768px) {
    max-width: 387px;
  }
`;
export const SelectButton = styled.button`
  position: relative;
  width: 100%;
  background: transparent;
  border: 1px solid #757575;
  padding: 15px 32px 15px 8px;
  font-size: 14px;
  line-height: 20px;
  text-align: start;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
  }
`;
export const Option = styled.button`
  background: transparent;
  border: none;
  font-size: 14px;
  line-height: 20px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const Down = styled.div`
  position: absolute;
  top: 20px;
  right: 15px;
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;
export const Up = styled.div`
  position: absolute;
  top: 25px;
  right: 15px;
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`;
