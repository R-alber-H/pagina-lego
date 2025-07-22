import logo_Lego from "../assets/logo_lego.jpg";
import Boton from "./boton.jsx";

function Footer() {
  return (
    <footer
      className="footer d-flex flex-row justify-content-evenly p-5"
      style={{ backgroundColor: "#201d48" }}
    >
      <div>
        <img
          src={logo_Lego}
          alt="Logo de LEGO"
          width="80"
          style={{ borderRadius: 20 }}
        />
      </div>
      <div className="d-flex flex-column gap-4 text-start">
        <h4 className="text-light">Quienes somos</h4>
        <Boton nombre="The lego group" to="/iniciar sesion" />
        <Boton nombre="Noticias lego" to="/iniciar sesion" />
        <Boton nombre="Certificacion de productos" to="/iniciar sesion" />
        <Boton nombre="Oferta de empleos" to="/iniciar sesion" />
      </div>
      <div className="d-flex flex-column gap-4 text-start">
        <h4 className="text-light">Atencion al cliente</h4>
        <Boton nombre="Piezas de repuesto" to="/iniciar sesion" />
        <Boton nombre="Devolucione" to="/iniciar sesion" />
        <Boton nombre="Metodos de pago" to="/iniciar sesion" />
      </div>
      <div className="d-flex flex-column gap-4 text-start">
        <h4 className="text-light">Atracciones</h4>
        <Boton nombre="Lego house" to="/iniciar sesion" />
        <Boton nombre="Lego park" to="/iniciar sesion" />
        <Boton nombre="Lego discovery" to="/iniciar sesion" />
      </div>
      <div className="d-flex flex-column gap-4 text-start">
        <h4 className="text-light">Mas informacion</h4>
        <Boton nombre="Lego fundation" to="/iniciar sesion" />
        <Boton nombre="Programa para socios" to="/iniciar sesion" />
      </div>
    </footer>
  );
}

export default Footer;
