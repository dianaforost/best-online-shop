import icon from 'images/icons/phone.svg';
import { IconContainer } from './IconPhone.styled';

export const IconPhone = () => {
  return (
    <IconContainer>
      <img src={icon} alt="Send e-mail" width="24" height="24" />
    </IconContainer>
  );
};
