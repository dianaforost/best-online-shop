import {
  IconFavorite,
  IconLanguage,
  IconSearch,
  IconShoppingCart,
  IconUser,
} from 'components';
import {
  Container,
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
        <ul>
          <li>
            <a href="/">
              <IconSearch />
            </a>
          </li>
          <li>
            <a href="/">
              <IconUser />
            </a>
          </li>
          <li>
            <a href="/">
              <IconFavorite />
            </a>
          </li>
          <li>
            <a href="/">
              <IconShoppingCart />
            </a>
          </li>
          <li>
            <a href="/">
              <IconLanguage />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};
