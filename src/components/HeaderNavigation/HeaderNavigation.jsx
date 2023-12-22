import { NavLink } from 'react-router-dom';
import {
  HeaderStoreNavItem,
  HeaderStoreNavMenu,
} from './HeaderNavigation.styled';

export const HeaderNavigation = () => {
  return (
    <>
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
    </>
  );
};
