import {
  Container,
  HeaderIconMenuItem,
  HeaderIconMenuNav,
  HeaderStoreNavItem,
  HeaderStoreNavMenu,
  LogoText,
} from './Header.styled';
import { NavLink } from 'react-router-dom';
import { Icon } from 'components/Icon/Icon';
import { useState } from 'react';

export const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Container>
      <LogoText>
        <NavLink to={'/'}>SportSvit</NavLink>
      </LogoText>
      <div>
        <nav>
          <HeaderStoreNavMenu>
            <HeaderStoreNavItem>
              <NavLink to={'/catalog/novelty'}>Новинки</NavLink>
            </HeaderStoreNavItem>
            <HeaderStoreNavItem>
              <NavLink to={'/catalog'}>Каталог</NavLink>
            </HeaderStoreNavItem>
            <HeaderStoreNavItem>
              <NavLink to={'/catalog/women'}>Жінки</NavLink>
            </HeaderStoreNavItem>
            <HeaderStoreNavItem>
              <NavLink to={'/catalog/man'}>Чоловіки</NavLink>
            </HeaderStoreNavItem>
            <HeaderStoreNavItem>
              <NavLink to={'/deals'}>Знижки</NavLink>
            </HeaderStoreNavItem>
          </HeaderStoreNavMenu>
        </nav>
      </div>
      <div>
        <HeaderIconMenuNav>
          <label>
            <input type="text" />
          </label>
          <HeaderIconMenuItem onClick={handleToggle}>
            <Icon id={'search'} width={'24px'} height={'24px'} />
          </HeaderIconMenuItem>
          <HeaderIconMenuItem>
            <a href="/">
              <Icon id={'user'} width={'24px'} height={'24px'} />
            </a>
          </HeaderIconMenuItem>
          <HeaderIconMenuItem>
            <a href="/">
              <Icon id={'heart'} width={'24px'} height={'24px'} />
            </a>
          </HeaderIconMenuItem>
          <HeaderIconMenuItem>
            <a href="/">
              <Icon id={'shopping-cart'} width={'24px'} height={'24px'} />
            </a>
          </HeaderIconMenuItem>
        </HeaderIconMenuNav>
      </div>
    </Container>
  );
};
