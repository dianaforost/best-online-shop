import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  HeaderIconMenuButton,
  HeaderIconMenuItem,
  HeaderIconMenuNav,
  HeaderMenuNavLink,
  HeaderStoreNavItem,
  HeaderStoreNavMenu,
  LogoText,
  Wrapper,
} from './Header.styled';
import { useClickAway } from 'react-use';
import { SearchBarComponent } from 'components/SearchBarComponent/SearchBarComponent';
import { Icon } from 'components/Icon/Icon';
import { PopUp } from 'components/Modal/PopUp';
// import { Auth } from 'components/Auth/Auth';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchRef = useRef(null);

  useClickAway(searchRef, () => {
    setIsActive(false);
  });

  const handleIsActive = () => {
    setIsActive(true);
  };

  const openPopUp = () => {
    setIsModalOpen(true);
  };

  return (
    <Wrapper>
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
                onClick={handleIsActive}
                type="button"
                aria-label="Search"
                disabled={isActive}
              >
                <Icon id={'search'} width={'24px'} height={'24px'} />
              </HeaderIconMenuButton>
            </HeaderIconMenuItem>
            <HeaderIconMenuItem>
              <HeaderIconMenuButton onClick={openPopUp} aria-label="User">
                <Icon id={'user'} width={'24px'} height={'24px'} />
              </HeaderIconMenuButton>

              {/* <PopUp
                data={<Icon id={'user'} width={'24px'} height={'24px'} />}
              />
               <Auth />
              </PopUp> */}
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
            <HeaderIconMenuItem>
              <HeaderIconMenuButton type="button" aria-label="Language">
                {/* <Icon id={'shopping-cart'} width={'24px'} height={'24px'} /> */}
                UA
              </HeaderIconMenuButton>
            </HeaderIconMenuItem>
          </HeaderIconMenuNav>
        </div>
      </Container>
      {isActive ? (
        <SearchBarComponent
          data={<Icon id={'search'} width={'24px'} height={'24px'} />}
          ref={searchRef}
        />
      ) : null}
      {isModalOpen ? (
        <PopUp modalIsOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      ) : null}
    </Wrapper>
  );
};
