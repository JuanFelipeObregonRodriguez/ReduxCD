import React from "react";

const NewProduct = () => {

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              AGREGAR PRODUCTO
            </h2>

            <form>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del producto"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="precio del producto"
                  name="price"
                />
              </div>
              <button className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
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
