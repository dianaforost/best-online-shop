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
  const [inputField, setInputField] = useState('');

  const handleToggle = () => {
    console.log('Toggle: ', isToggled);
    setIsToggled(!isToggled);
  };

  const handleInput = e => {
    console.log(inputField);
    setInputField(e.target.value);
  };

  return (
    <header>
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
            {isToggled && (
              <label>
                <input type="text" value={inputField} onChange={handleInput} />
              </label>
            )}
            <HeaderIconMenuItem onClick={handleToggle} type="button">
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
    </header>
  );
};
