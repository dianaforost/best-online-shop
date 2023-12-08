import { Routes, Route } from "react-router-dom";

import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { MainPage } from "pages/MainPage/MainPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";
import { CatalogPage } from "pages/CatalogPage/CatalogPage";
import { ProductDetailsPage } from "pages/ProductDetailsPage/ProductDetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:productsId" element={<ProductDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
