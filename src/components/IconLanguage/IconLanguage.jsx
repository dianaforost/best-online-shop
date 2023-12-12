import icon from '../../images/icons/envelope.svg';
import { IconContainer } from './IconLanguage.styled';

export const Envelope = () => {
  return (
    <IconContainer>
      <img src={icon} alt="Send e-mail" width="24" height="24" />
    </IconContainer>
  );
};
