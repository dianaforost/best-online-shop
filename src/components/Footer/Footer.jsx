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
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <div>
            <LogoText>
              <NavLink to={'/'}>SportSvit</NavLink>
            </LogoText>
          </div>
          <FooterNavigation>
            <InformationMenu>
              <ul>
                <CategoryHeaderText>Інформація</CategoryHeaderText>
                <CategoryItemText>
                  <NavLink to={'/information'}>
                    <CapitalizeText>Доставка</CapitalizeText> та оплата
                  </NavLink>
                </CategoryItemText>
                <CategoryItemText>
                  <NavLink to={'/information'}>
                    <CapitalizeText>Повернення</CapitalizeText> та обмін
                  </NavLink>
                </CategoryItemText>
                <CategoryItemText>
                  <NavLink to={'/information'}>
                    <CapitalizeText>Угода</CapitalizeText> користувача
                  </NavLink>
                </CategoryItemText>
                <CategoryItemText>
                  <NavLink to={'/information'}>
                    <CapitalizeText>Питання</CapitalizeText> та відповіді
                  </NavLink>
                </CategoryItemText>
              </ul>
            </InformationMenu>
            <StoreMenu>
              <ul>
                <CategoryHeaderText>Магазин</CategoryHeaderText>

                <CategoryItemText>
                  <NavLink to={'/catalog/novelty'}>
                    <CapitalizeText>Новинки</CapitalizeText>
                  </NavLink>
                </CategoryItemText>
                <CategoryItemText>
                  <NavLink to={'/catalog/women'}>
                    <CapitalizeText>Жінки</CapitalizeText>
                  </NavLink>
                </CategoryItemText>
                <CategoryItemText>
                  <NavLink to={'/catalog/man'}>
                    <CapitalizeText>Чоловіки</CapitalizeText>
                  </NavLink>
                </CategoryItemText>
                <CategoryItemText>
                  <NavLink to={'/deals'}>
                    <CapitalizeText>Знижки</CapitalizeText>
                  </NavLink>
                </CategoryItemText>
              </ul>
            </StoreMenu>
            <ContactsMenu>
              <ul>
                <CategoryHeaderText>Контакти</CategoryHeaderText>
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
                  <a href="mailto:sportsvit@gmail.com">sportsvit@gmail.com</a>
                </CategoryItemText>
                <CategoryItemText>
                  <ContactsMenuIcon>
                    <IconFacebook />
                  </ContactsMenuIcon>
                  <CapitalizeText>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Facebook
                    </a>
                  </CapitalizeText>
                </CategoryItemText>
                <CategoryItemText>
                  <ContactsMenuIcon>
                    <IconInstagram />
                  </ContactsMenuIcon>
                  <CapitalizeText>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Instagram
                    </a>
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
