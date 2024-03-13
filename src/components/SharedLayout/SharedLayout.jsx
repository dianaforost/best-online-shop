import { BackToTopButton } from 'components/BackToTopButton/BackToTopButton';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <BackToTopButton />
    </>
  );
};
