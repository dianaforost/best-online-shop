import { Routes, Route, useLocation } from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
// import { MainPage } from "pages/MainPage/MainPage";
// import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";
// import { CatalogPage } from "pages/CatalogPage/CatalogPage";
// import { ProductDetailsPage } from "pages/ProductDetailsPage/ProductDetailsPage";
// import { ProductWomenPage } from 'pages/ProductWomenPage/ProductWomenPage';
// import { ProductMenPage } from 'pages/ProductMenPage/ProductMenPage';
// import { DealsPage } from 'pages/DealsPage/DealsPage';
// import {Information} from './Information/Information'
import {
  DealsPage,
  ProductsCatalogPage,
  ProductDetailsPage,
  CatalogPage,
  NotFoundPage,
  MainPage,
  InformationPage,
} from 'pages';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:category" element={<ProductsCatalogPage />} />
          <Route
            path="catalog/:category/:productsId"
            element={<ProductDetailsPage />}
          />
          <Route path="deals" element={<DealsPage />} />
          <Route path="deals/:productsId" element={<ProductDetailsPage />} />
          <Route path="information" element={<InformationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
