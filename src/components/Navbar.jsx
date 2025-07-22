import { FaSearch } from "react-icons/fa";
import logo_Lego from "../assets/logo_lego.jpg";
import Boton from "./boton.jsx";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo_Lego} alt="Logo de LEGO" width="55" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <div className="d-flex align-items-center gap-3">
              <form className="d-flex" role="search">
                <button
                  style={{
                    backgroundColor: "white",
                    border: "0px",
                    borderTopLeftRadius: 12,
                    borderBottomLeftRadius: 12,
                    height: 35,
                    paddingLeft: 10,
                  }}
                >
                  <FaSearch className="me-2 text-muted" />
                </button>
                <input
                  className="me-2"
                  style={{
                    backgroundColor: "white",
                    border: "0px",
                    borderBottomRightRadius: 12,
                    borderTopRightRadius: 12,
                    height: 35,
                    width: 240,
                    outline: "none",
                    boxShadow: "none",
                  }}
                  type="search"
                  placeholder="Buscar"
                  aria-label="Buscar"
                />
              </form>
              <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
                <li className="nav-item me-2">
                  <Boton nombre="Comprar" to="/comprar" />
                </li>
                <li className="nav-item me-2">
                  <Boton nombre="Productos nuevos" to="/productos_nuevos" />
                </li>
                <li className="nav-item">
                  <Boton nombre="Iniciar sesion" to="/login" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
