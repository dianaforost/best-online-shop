import React from 'react';
import {
  Container,
  HeaderIconMenuButton,
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
import { PopUp } from 'components/Modal/PopUp';
import { Auth } from 'components/Auth/Auth';

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchOpen = () => {
    isSearchOpen ? setIsSearchOpen(false) : setIsSearchOpen(true);
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
            <HeaderIconMenuItem>
              <HeaderIconMenuButton
                onClick={handleSearchOpen}
                type="button"
                aria-label="Search"
              >
                <Icon id={'search'} width={'24px'} height={'24px'} />
              </HeaderIconMenuButton>
            </HeaderIconMenuItem>
            <HeaderIconMenuItem>
              <PopUp data={<Icon id={'user'} width={'24px'} height={'24px'} />}>
                <Auth />
              </PopUp>
            </HeaderIconMenuItem>
            <HeaderIconMenuItem>
              <HeaderIconMenuButton type="button" aria-label="User favorites">
                <Icon id={'heart'} width={'24px'} height={'24px'} />
              </HeaderIconMenuButton>
            </HeaderIconMenuItem>
            <HeaderIconMenuItem>
              <HeaderIconMenuButton type="button" aria-label="Shopping cart">
                <Icon id={'shopping-cart'} width={'24px'} height={'24px'} />
              </HeaderIconMenuButton>
            </HeaderIconMenuItem>
          </HeaderIconMenuNav>
        </div>
      </Container>
      {isSearchOpen && (
        <SearchBarComponent
          data={<Icon id={'search'} width={'24px'} height={'24px'} />}
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
      )}
    </header>
  );
};
