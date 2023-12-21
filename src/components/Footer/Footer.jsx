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
                  <NavLink to={'/information'}>Доставка та оплата</NavLink>
                </CategoryItemText>
                <CategoryItemText>
                  <NavLink to={'/information'}>
                    <CapitalizeText>Повернення</CapitalizeText> та обмін
                  </NavLink>
                </CategoryItemText>
                <CategoryItemText>
                  <NavLink to={'/information'}>Угода користувача</NavLink>
                </CategoryItemText>
                <CategoryItemText>
                  <NavLink to={'/information'}>Питання та відповіді</NavLink>
                </CategoryItemText>
              </ul>
            </InformationMenu>
            <StoreMenu>
              <ul>
                <CategoryHeaderText>Магазин</CategoryHeaderText>

                <CategoryItemText>
                  <NavLink to={'/income'}>Новинки</NavLink>
                </CategoryItemText>
                <CategoryItemText>
                  <NavLink to={'/women_catalog'}>Жінки</NavLink>
                </CategoryItemText>
                <CategoryItemText>
                  <NavLink to={'/men_catalog'}>Чоловіки</NavLink>
                </CategoryItemText>
                <CategoryItemText>
                  <NavLink to={'/deals'}>Знижки</NavLink>
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
