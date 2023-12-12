import icon from 'images/icons/heart.svg';
import { IconContainer } from './IconHeart.styled';

export const IconHeart = () => {
  return (
    <IconContainer>
      <img src={icon} alt="Send e-mail" width="24" height="24" />
    </IconContainer>
  );
};
