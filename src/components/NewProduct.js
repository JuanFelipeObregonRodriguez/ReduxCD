import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewProduct } from "../actions/productsAction";

const NewProduct = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);

  const dispatch = useDispatch();

  const addProduct = product => {
    dispatch(addNewProduct(product));
  };

  const submitNewProduct = (e) => {
    e.preventDefault();

    if (nombre.trim() === "" || precio <= 0) {
      return;
    }

    addProduct({
      nombre,
      precio,
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              AGREGAR PRODUCTO
            </h2>

            <form onSubmit={submitNewProduct}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del producto"
                  name="name"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="precio del producto"
                  name="price"
                  value={precio}
                  onChange={(e) => setPrecio(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
