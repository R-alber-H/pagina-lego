import "./botones.css";

function Boton_2({ nombre, onClick }) {
  return (
    <button className="boton_2 d-block mx-auto" onClick={onClick}>
      {nombre}
    </button>
  );
}

export default Boton_2;
