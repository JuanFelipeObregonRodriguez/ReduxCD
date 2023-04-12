import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expang-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link to={'/'}className="text-light">
            Crud - React, Redux, REST API & Axios
          </Link>
        </h1>
      </div>
      <a
        href="/productos/nuevo"
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
      >
        agregar producto
      </a>
    </nav>
  );
};

export default Header;
