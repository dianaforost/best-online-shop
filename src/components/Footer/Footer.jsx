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
  CapitalizeText,
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
                <CategoryHeaderText>
                  <a href="/">інформація</a>
                </CategoryHeaderText>
                <CategoryItemText>
                  <a href="/">Доставка та оплата</a>
                </CategoryItemText>
                <CategoryItemText>
                  <a href="/">
                    <CapitalizeText>Повернення</CapitalizeText> та обмін
                  </a>
                </CategoryItemText>
                <CategoryItemText>
                  <a href="/">Угода користувача</a>
                </CategoryItemText>
                <CategoryItemText>
                  <a href="/">Питання та відповіді</a>
                </CategoryItemText>
              </ul>
            </InformationMenu>
            <StoreMenu>
              <ul>
                <CategoryHeaderText>магазин</CategoryHeaderText>

                <CategoryItemText>
                  <a href="/">Новинки</a>
                </CategoryItemText>
                <CategoryItemText>
                  <a href="/">Жінки</a>
                </CategoryItemText>
                <CategoryItemText>
                  <a href="/">Чоловіки</a>
                </CategoryItemText>
                <CategoryItemText>
                  <a href="/">Знижки</a>
                </CategoryItemText>
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
                  <CapitalizeText>
                    <a href="/">Facebook</a>
                  </CapitalizeText>
                </CategoryItemText>
                <CategoryItemText>
                  <ContactsMenuIcon>
                    <IconInstagram />
                  </ContactsMenuIcon>
                  <CapitalizeText>
                    <a href="/">Instagram</a>
                  </CapitalizeText>
                </CategoryItemText>
              </ul>
            </ContactsMenu>
          </FooterNavigation>
        </Container>
      </footer>
    </>
  );
};
