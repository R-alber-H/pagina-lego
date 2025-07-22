
import './botones.css';
import { Link } from 'react-router-dom';

function Boton({ nombre, to }) {
  return <Link to={to} className="boton">{nombre}</Link>;
}

export default Boton;


