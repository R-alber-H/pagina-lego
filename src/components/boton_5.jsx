
import './botones.css';

function Boton_5({ nombre, onClick }) {
  return (
    <button className="boton_4" onClick={onClick}>
      {nombre}
    </button>
  );
}

export default Boton_5;
