import { Routes, Route, useLocation } from 'react-router-dom';


import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import {
  DealsPage,
  ProductsCatalogPage,
  ProductDetailsPage,
  CatalogPage,
  NotFoundPage,
  MainPage,
  InformationPage,
  // FavoritePage,
  // UserPage,
  // CartPage,
} from 'pages';
import { useEffect } from 'react';
import GlobalStyles from 'GlobalStyle';
import { Auth } from 'components/Auth/Auth';
import { CustomerPage } from 'pages/CustomerPage/CustomerPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:category" element={<ProductsCatalogPage />} />
          <Route
            path="catalog/:category/:productsId"
            element={<ProductDetailsPage />}
          />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="deals" element={<DealsPage />} />
          <Route path="deals/:productsId" element={<ProductDetailsPage />} />
          <Route path="information" element={<InformationPage />} />
          <Route path="auth" element={<Auth />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
