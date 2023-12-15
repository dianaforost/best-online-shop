import { Routes, Route } from "react-router-dom";

import { SharedLayout } from "components/SharedLayout/SharedLayout";
// import { MainPage } from "pages/MainPage/MainPage";
// import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";
// import { CatalogPage } from "pages/CatalogPage/CatalogPage";
// import { ProductDetailsPage } from "pages/ProductDetailsPage/ProductDetailsPage";
// import { ProductWomenPage } from 'pages/ProductWomenPage/ProductWomenPage';
// import { ProductMenPage } from 'pages/ProductMenPage/ProductMenPage';
// import { DealsPage } from 'pages/DealsPage/DealsPage';
// import {Information} from './Information/Information'
import { DealsPage, ProductMenPage, ProductWomenPage, ProductDetailsPage, CatalogPage, NotFoundPage, MainPage, InformationPage } from 'pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:productsId" element={<ProductDetailsPage />} />
          <Route path="women" element={<ProductWomenPage />} />
          <Route path="men" element={<ProductMenPage />} />
          <Route path="deals" element={<DealsPage />} />
          <Route path="information" element={<InformationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
