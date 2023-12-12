import {
  IconEnvelope,
  IconFacebook,
  IconInstagram,
  IconPhone,
} from 'components';
import { Container } from './Footer.styled';

export const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <div>SPORTSVIT</div>
          <div>
            <div>
              <ul>
                <li>інформація</li>
                <li>Доставка та оплата</li>
                <li>Повернення та обмін</li>
                <li>Угода користувача</li>
                <li>Питання та відповіді</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>магазин</li>
                <li>Новинки</li>
                <li>Жінки</li>
                <li>Чоловіки</li>
                <li>Знижки</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>контакти</li>
                <li>
                  <IconPhone />
                  <a href="tel:+380994567895">+38(099)4567895</a>
                </li>
                <li>
                  <IconEnvelope />
                  <a href="email:sportsvit@gmail.com">sportsvit@gmail.com</a>
                </li>
                <li>
                  <IconFacebook />
                  <a href="/">facebook</a>
                </li>
                <li>
                  <IconInstagram />
                  <a href="/">instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};
