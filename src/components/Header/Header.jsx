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
        <a href="/">SPORTSVIT</a>
      </LogoText>
      <div>
        <nav>
          <HeaderStoreNavMenu>
            <HeaderStoreNavItem>
              <a href="/">НОВИНКИ</a>
            </HeaderStoreNavItem>
            <HeaderStoreNavItem>
              <a href="/">КАТАЛОГ</a>
            </HeaderStoreNavItem>
            <HeaderStoreNavItem>
              <a href="/">ЖІНКИ</a>
            </HeaderStoreNavItem>
            <HeaderStoreNavItem>
              <a href="/">ЧОЛОВІКИ</a>
            </HeaderStoreNavItem>
            <HeaderStoreNavItem>
              <a href="/">ЗНИЖКИ</a>
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
