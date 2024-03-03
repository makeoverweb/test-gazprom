import { Route, Routes } from "react-router-dom";

import "./style/index.css";
import { ROUTES } from "./constants/routes";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProductPage } from "./pages/ProductPage/ProductPage";

export function App() {
  return (
    <div className="container">
      <Routes>
        <Route path={ROUTES.HOME.ROUTE} element={<HomePage />} />
        <Route path={`${ROUTES.PRODUCT.ROUTE}`} element={<ProductPage />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
}
