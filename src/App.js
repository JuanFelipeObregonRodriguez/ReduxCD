import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import EditProduct from "./components/EditProduct";
import store from "./store";
import { Provider } from "react-redux";
const App = () => {
  

  return (
    <BrowserRouter>
    <Provider store={store}>
      <Header />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Products  />} />
          <Route path="/productos/nuevo" element={<NewProduct  />} />
          <Route path="/productos/editar/:id" element={<EditProduct />} />
        </Routes>
      </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;