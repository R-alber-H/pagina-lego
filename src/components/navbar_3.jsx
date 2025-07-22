import logo_Lego from "../assets/logo_lego.jpg";
import Boton_4 from "./boton_4.jsx";
import Boton from "./boton.jsx";
import { Link } from "react-router-dom";

function Navbar_3({ dentroDeCarritoDeCompras }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/pagina_cliente">
            <img src={logo_Lego} alt="Logo de LEGO" width="50" />
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
              <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
                {dentroDeCarritoDeCompras ? (
                  <li className="nav-item">
                    <Boton_4 nombre="Cerrar sesion" to="/" />
                  </li>
                ) : (
                  <>
                    <li className="nav-item me-2">
                      <Boton nombre="Carrito de compras" to="/pagina_carrito" />
                    </li>
                    <li className="nav-item">
                      <Boton_4 nombre="Cerrar sesion" to="/" />
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar_3;
