import Boton_2 from "./boton_2.jsx";

function Card({ imagen, producto, precio, onAgregar }) {
  const productoActual = { imagen, producto, precio };

  return (
    <div
      className="card"
      style={{ width: "18rem", height: "100%", border: "none" }}
    >
      <img
        src={imagen}
        alt="imagen de lego"
        className="card-img-top mb-3"
        style={{
          height: "250px",
          width: "100%",
          objectFit: "contain",
          padding: "10px",
        }}
      />
      <div className="card-body">
        <div>
          <p
            className="card-text mb-3 text-center"
            style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "16px" }}
          >
            {producto}
          </p>
          <p className="card-text mb-3 text-center">{precio}</p>
        </div>
        <Boton_2
          nombre="Agregar al carrito"
          onClick={() => onAgregar(productoActual)}
        />
      </div>
    </div>
  );
}

export default Card;
