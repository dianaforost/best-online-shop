import { Outlet } from "react-router-dom";
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};
