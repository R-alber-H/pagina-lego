import { Link } from "react-router-dom";
import "./botones.css";

function Boton_1({ nombre, to, type = "button", color }) {
  if (to) {
    // Navegación entre páginas (como un enlace con estilo de botón)
    return (
      <Link to={to} className="boton_1">
        {nombre}
      </Link>
    );
  }

  // Botón tradicional (como para formularios)
  return (
    <button type={type} className="boton_1" style={{ backgroundColor: color }}>
      {nombre}
    </button>
  );
}

export default Boton_1;
