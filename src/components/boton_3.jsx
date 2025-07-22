import { Link } from 'react-router-dom';
import './botones.css';

function Boton({ nombre, to }) {
  return <Link to={to} className="boton_3">{nombre}</Link>;
}

export default Boton;
