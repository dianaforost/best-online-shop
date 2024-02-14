import {
  Container,
  Logo,
  LogoText,
  CategoryHeaderText,
  CategoryItemText,
  FooterNavigation,
  InformationMenu,
  StoreMenu,
  ContactsMenu,
  ContactsMenuIcon,
  CapitalizeText,
  CategoryBlock,
  FooterWrapper,
  NavigationLink,
} from './Footer.styled';
import { Icon } from 'components/Icon/Icon';

export const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Container>
          <Logo>
            <LogoText>
              <NavigationLink to={'/'}>SportSvit</NavigationLink>
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
            <ContactsMenu>
              <CategoryBlock>
                <CategoryHeaderText>Контакти</CategoryHeaderText>
                <CategoryItemText>
                  <ContactsMenuIcon>
                    <Icon id={'phone'} width={24} height={24} />
                  </ContactsMenuIcon>
                  <NavigationLink href="tel:+380994567895">
                    +38(099)4567895
                  </NavigationLink>
                </CategoryItemText>
                <CategoryItemText>
                  <ContactsMenuIcon>
                    <Icon id={'envelope'} width={24} height={24} />
                  </ContactsMenuIcon>
                  <NavigationLink href="mailto:sportsvit@gmail.com">
                    sportsvit@gmail.com
                  </NavigationLink>
                </CategoryItemText>
                <CategoryItemText>
                  <ContactsMenuIcon>
                    <Icon id={'facebook-f'} width={24} height={24} />
                  </ContactsMenuIcon>
                  <CapitalizeText>
                    <NavigationLink
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Facebook
                    </NavigationLink>
                  </CapitalizeText>
                </CategoryItemText>
                <CategoryItemText>
                  <ContactsMenuIcon>
                    <Icon id={'instagram'} width={24} height={24} />
                  </ContactsMenuIcon>
                  <CapitalizeText>
                    <NavigationLink
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Instagram
                    </NavigationLink>
                  </CapitalizeText>
                </CategoryItemText>
              </CategoryBlock>
            </ContactsMenu>
          </FooterNavigation>
        </Container>
      </FooterWrapper>
    </>
  );
};
