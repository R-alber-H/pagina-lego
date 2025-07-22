
import { Link } from 'react-router-dom';
import './botones.css';

function Boton_4({ nombre, to }) {
  return <Link to={to} className="boton_4">{nombre}</Link>;
}


export default Boton_4;