import {
  IconFavorite,
  IconLanguage,
  IconSearch,
  IconShoppingCart,
  IconUser,
} from 'components';
import {
  Container,
  HeaderIconMenuItem,
  HeaderIconMenuNav,
  HeaderStoreNavItem,
  HeaderStoreNavMenu,
  LogoText,
} from './Header.styled';

export const Header = () => {
  return (
    <Container>
      <LogoText>
        <a href="/">SportSvit</a>
      </LogoText>
      <div>
        <nav>
          <HeaderStoreNavMenu>
            <HeaderStoreNavItem>
              <a href="/">Новинки</a>
            </HeaderStoreNavItem>
            <HeaderStoreNavItem>
              <a href="/">Каталог</a>
            </HeaderStoreNavItem>
            <HeaderStoreNavItem>
              <a href="/">Жінки</a>
            </HeaderStoreNavItem>
            <HeaderStoreNavItem>
              <a href="/">Чоловіки</a>
            </HeaderStoreNavItem>
            <HeaderStoreNavItem>
              <a href="/">Знижки</a>
            </HeaderStoreNavItem>
          </HeaderStoreNavMenu>
        </nav>
      </div>
      <div>
        <HeaderIconMenuNav>
          <HeaderIconMenuItem>
            <a href="/">
              <IconSearch />
            </a>
          </HeaderIconMenuItem>
          <HeaderIconMenuItem>
            <a href="/">
              <IconUser />
            </a>
          </HeaderIconMenuItem>
          <HeaderIconMenuItem>
            <a href="/">
              <IconFavorite />
            </a>
          </HeaderIconMenuItem>
          <HeaderIconMenuItem>
            <a href="/">
              <IconShoppingCart />
            </a>
          </HeaderIconMenuItem>
          <HeaderIconMenuItem>
            <a href="/">
              <IconLanguage />
            </a>
          </HeaderIconMenuItem>
        </HeaderIconMenuNav>
      </div>
    </Container>
  );
};
