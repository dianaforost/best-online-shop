import {
  IconFavorite,
  IconLanguage,
  IconSearch,
  IconShoppingCart,
  IconUser,
} from 'components';

export const Header = () => {
  return (
    <>
      <div>SportSvit</div>
      <div>
        <nav>
          <ul>
            <li>
              <a href="">НОВИНКИ</a>
            </li>
            <li>
              <a href="">КАТАЛОГ</a>
            </li>
            <li>
              <a href="">ЖІНКИ</a>
            </li>
            <li>
              <a href="">ЧОЛОВІКИ</a>
            </li>
            <li>
              <a href="">ЗНИЖКИ</a>
            </li>
          </ul>
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
    </>
  );
};
