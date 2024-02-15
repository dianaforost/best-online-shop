import { Link } from 'react-router-dom';
import {
  Container,
  Logo,
  LogoText,
  CategoryHeaderText,
  CategoryItemText,
  FooterNavigation,
  InformationMenu,
  StoreMenu,
  ContactsMenuIcon,
  CapitalizeText,
  CategoryBlock,
  FooterWrapper,
  NavigationLink,
  CategoryItemTextContacts,
  ContactsNavLink,
} from './Footer.styled';
import { Icon } from 'components/Icon/Icon';

export const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Container>
          <Logo>
            <LogoText>
              <Link to={'/'}>SportSvit</Link>
            </LogoText>
          </Logo>
          <FooterNavigation>
            <InformationMenu>
              <CategoryBlock>
                <CategoryHeaderText>Інформація</CategoryHeaderText>
                <CategoryItemText>
                  <NavigationLink to={'/information'}>
                    <CapitalizeText>Доставка</CapitalizeText> та оплата
                  </NavigationLink>
                </CategoryItemText>
                <CategoryItemText>
                  <NavigationLink to={'/information'}>
                    <CapitalizeText>Повернення</CapitalizeText> та обмін
                  </NavigationLink>
                </CategoryItemText>
                <CategoryItemText>
                  <NavigationLink to={'/information'}>
                    <CapitalizeText>Угода</CapitalizeText> користувача
                  </NavigationLink>
                </CategoryItemText>
                <CategoryItemText>
                  <NavigationLink to={'/information'}>
                    <CapitalizeText>Питання</CapitalizeText> та відповіді
                  </NavigationLink>
                </CategoryItemText>
              </CategoryBlock>
            </InformationMenu>
            <StoreMenu>
              <CategoryBlock>
                <CategoryHeaderText>Магазин</CategoryHeaderText>
                <CategoryItemText>
                  <NavigationLink to={'/catalog/novelty'}>
                    <CapitalizeText>Новинки</CapitalizeText>
                  </NavigationLink>
                </CategoryItemText>
                <CategoryItemText>
                  <NavigationLink to={'/catalog/women'}>
                    <CapitalizeText>Жінки</CapitalizeText>
                  </NavigationLink>
                </CategoryItemText>
                <CategoryItemText>
                  <NavigationLink to={'/catalog/man'}>
                    <CapitalizeText>Чоловіки</CapitalizeText>
                  </NavigationLink>
                </CategoryItemText>
                <CategoryItemText>
                  <NavigationLink to={'/deals'}>
                    <CapitalizeText>Знижки</CapitalizeText>
                  </NavigationLink>
                </CategoryItemText>
              </CategoryBlock>
            </StoreMenu>
            <>
              <CategoryBlock>
                <CategoryHeaderText>Контакти</CategoryHeaderText>
                <CategoryItemTextContacts>
                  <ContactsNavLink href="tel:+380994567895">
                    <ContactsMenuIcon>
                      <Icon id={'phone'} width={24} height={24} />
                    </ContactsMenuIcon>
                    <CapitalizeText>+38(099)4567895</CapitalizeText>
                  </ContactsNavLink>
                </CategoryItemTextContacts>
                <CategoryItemTextContacts>
                  <ContactsNavLink href="mailto:sportsvit@gmail.com">
                    <ContactsMenuIcon>
                      <Icon id={'envelope'} width={24} height={24} />
                    </ContactsMenuIcon>
                    <CapitalizeText>sportsvit@gmail.com</CapitalizeText>
                  </ContactsNavLink>
                </CategoryItemTextContacts>
                <CategoryItemTextContacts>
                  <ContactsNavLink
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <ContactsMenuIcon>
                      <Icon id={'facebook-f'} width={24} height={24} />
                    </ContactsMenuIcon>
                    <CapitalizeText>Facebook</CapitalizeText>
                  </ContactsNavLink>
                </CategoryItemTextContacts>
                <CategoryItemTextContacts>
                  <ContactsNavLink
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <ContactsMenuIcon>
                      <Icon id={'instagram'} width={24} height={24} />
                    </ContactsMenuIcon>
                    <CapitalizeText>Instagram</CapitalizeText>
                  </ContactsNavLink>
                </CategoryItemTextContacts>
              </CategoryBlock>
            </>
          </FooterNavigation>
        </Container>
      </FooterWrapper>
    </>
  );
};
