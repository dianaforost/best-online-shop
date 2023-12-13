import {
  IconEnvelope,
  IconFacebook,
  IconInstagram,
  IconPhone,
} from 'components';
import {
  Container,
  LogoText,
  CategoryHeaderText,
  CategoryItemText,
  FooterNavigation,
  InformationMenu,
  StoreMenu,
  ContactsMenu,
  ContactsMenuIcon,
} from './Footer.styled';

export const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <div>
            <LogoText>sportsvit</LogoText>
          </div>
          <FooterNavigation>
            <InformationMenu>
              <ul>
                <CategoryHeaderText>інформація</CategoryHeaderText>
                <CategoryItemText>Доставка та оплата</CategoryItemText>
                <CategoryItemText>Повернення та обмін</CategoryItemText>
                <CategoryItemText>Угода користувача</CategoryItemText>
                <CategoryItemText>Питання та відповіді</CategoryItemText>
              </ul>
            </InformationMenu>
            <StoreMenu>
              <ul>
                <CategoryHeaderText>магазин</CategoryHeaderText>

                <CategoryItemText>Новинки</CategoryItemText>
                <CategoryItemText>Жінки</CategoryItemText>
                <CategoryItemText>Чоловіки</CategoryItemText>
                <CategoryItemText>Знижки</CategoryItemText>
              </ul>
            </StoreMenu>
            <ContactsMenu>
              <ul>
                <CategoryHeaderText>контакти</CategoryHeaderText>
                <CategoryItemText>
                  <ContactsMenuIcon>
                    <IconPhone />
                  </ContactsMenuIcon>
                  <a href="tel:+380994567895">+38(099)4567895</a>
                </CategoryItemText>
                <CategoryItemText>
                  <ContactsMenuIcon>
                    <IconEnvelope />
                  </ContactsMenuIcon>
                  <a href="email:sportsvit@gmail.com">sportsvit@gmail.com</a>
                </CategoryItemText>
                <CategoryItemText>
                  <ContactsMenuIcon>
                    <IconFacebook />
                  </ContactsMenuIcon>
                  <a href="/">facebook</a>
                </CategoryItemText>
                <CategoryItemText>
                  <ContactsMenuIcon>
                    <IconInstagram />
                  </ContactsMenuIcon>
                  <a href="/">instagram</a>
                </CategoryItemText>
              </ul>
            </ContactsMenu>
          </FooterNavigation>
        </Container>
      </footer>
    </>
  );
};
