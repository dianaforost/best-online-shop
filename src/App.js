import { Routes, Route } from "react-router-dom";

import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { MainPage } from "pages/MainPage/MainPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
