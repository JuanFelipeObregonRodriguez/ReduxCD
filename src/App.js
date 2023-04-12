import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import EditProduct from "./components/EditProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/productos/nuevo" element={<NewProduct />} />
          <Route path="/productos/editar/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;