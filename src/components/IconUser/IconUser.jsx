import icon from 'images/icons/user.svg';
import { IconContainer } from './IconUser.styled';

export const IconUser = () => {
  return (
    <IconContainer>
      <img src={icon} alt="Send e-mail" width="24" height="24" />
    </IconContainer>
  );
};
