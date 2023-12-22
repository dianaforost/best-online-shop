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
  LogoText,
} from './Header.styled';
import { NavLink } from 'react-router-dom';
import { HeaderNavigation } from 'components/HeaderNavigation/HeaderNavigation';

export const Header = () => {
  return (
    <Container>
      <LogoText>
        <NavLink to={'/'}>SportSvit</NavLink>
      </LogoText>
      <div>
        <HeaderNavigation />
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
