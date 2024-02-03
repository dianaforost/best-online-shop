import React from 'react';
import {
  Container,
  HeaderIconMenuItem,
  HeaderIconMenuNav,
  HeaderMenuNavLink,
  HeaderStoreNavItem,
  HeaderStoreNavMenu,
  LogoText,
} from './Header.styled';
import { Icon } from 'components/Icon/Icon';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchBarComponent } from 'components/SearchBarComponent/SearchBarComponent';

export const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    console.log('Toggle: ', isToggled);
    setIsToggled(!isToggled);
  };

  return (
    <header>
      <Container>
        <LogoText>
          <Link to={'/'}>SportSvit</Link>
        </LogoText>
        <div>
          <nav>
            <HeaderStoreNavMenu>
              <HeaderStoreNavItem>
                <HeaderMenuNavLink to={'/catalog/novelty'}>
                  Новинки
                </HeaderMenuNavLink>
              </HeaderStoreNavItem>
              <HeaderStoreNavItem>
                <HeaderMenuNavLink to={'/catalog'}>Каталог</HeaderMenuNavLink>
              </HeaderStoreNavItem>
              <HeaderStoreNavItem>
                <HeaderMenuNavLink to={'/catalog/women'}>
                  Жінки
                </HeaderMenuNavLink>
              </HeaderStoreNavItem>
              <HeaderStoreNavItem>
                <HeaderMenuNavLink to={'/catalog/man'}>
                  Чоловіки
                </HeaderMenuNavLink>
              </HeaderStoreNavItem>
              <HeaderStoreNavItem>
                <HeaderMenuNavLink to={'/deals'}>Знижки</HeaderMenuNavLink>
              </HeaderStoreNavItem>
            </HeaderStoreNavMenu>
          </nav>
        </div>
        <div>
          <HeaderIconMenuNav>
            {isToggled && <SearchBarComponent />}
            <HeaderIconMenuItem onClick={handleToggle} type="button">
              <Icon id={'search'} width={'24px'} height={'24px'} />
            </HeaderIconMenuItem>
            <HeaderIconMenuItem>
              <Link to={'/user'}>
                <Icon id={'user'} width={'24px'} height={'24px'} />
              </Link>
            </HeaderIconMenuItem>
            <HeaderIconMenuItem>
              <Link to={'/favorite'}>
                <Icon id={'heart'} width={'24px'} height={'24px'} />
              </Link>
            </HeaderIconMenuItem>
            <HeaderIconMenuItem>
              <Link to={'/cart'}>
                <Icon id={'shopping-cart'} width={'24px'} height={'24px'} />
              </Link>
            </HeaderIconMenuItem>
          </HeaderIconMenuNav>
        </div>
      </Container>
    </header>
  );
};
