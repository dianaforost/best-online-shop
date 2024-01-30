import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

export const OpenButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  font-family: inherit;
  color: inherit;
`;
export const ModalPopUp = styled(Modal)`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  padding: 24px;
  transform: translate(-50%, -50%);
  border-radius: 8px;
`;
export const SpecialModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  background-color: hsl(0deg 0% 8% / 80%);
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
`;
export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: all 0.3s ease-in-out;
`;
