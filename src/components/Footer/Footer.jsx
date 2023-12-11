import { Container } from './Footer.styled';

export const Footer = () => {
  return (
    <footer>
      <Container>
        <p>SPORTSVIT</p>
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
            <li>+38(099)4567895</li>
            <li>sportsvit@gmail.com</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
