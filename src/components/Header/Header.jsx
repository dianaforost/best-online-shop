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
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <Container>
      <LogoText>
        <NavLink to={'/'}>SportSvit</NavLink>
      </LogoText>
      <div>
        <nav>
          <HeaderStoreNavMenu>
            <HeaderStoreNavItem>
              <NavLink to={'/income'}>Новинки</NavLink>
            </HeaderStoreNavItem>
            <HeaderStoreNavItem>
              <NavLink to={'/catalog'}>Каталог</NavLink>
            </HeaderStoreNavItem>
            <HeaderStoreNavItem>
              <NavLink to={'/women_catalog'}>Жінки</NavLink>
            </HeaderStoreNavItem>
            <HeaderStoreNavItem>
              <NavLink to={'/men_catalog'}>Чоловіки</NavLink>
            </HeaderStoreNavItem>
            <HeaderStoreNavItem>
              <NavLink to={'/deals'}>Знижки</NavLink>
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
