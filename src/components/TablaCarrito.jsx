import { useEffect, useState } from "react";
import Boton_5 from "./boton_5";
import Boton_2 from "./boton_2";
import Swal from "sweetalert2";

function TablaCarrito() {
  const usuario = localStorage.getItem("usuarioActual");
  const carritoKey = `carrito_${usuario}`;
  const [carrito, setCarrito] = useState([]);

  // Cargar carrito al iniciar
  useEffect(() => {
    const carritoGuardado = localStorage.getItem(carritoKey);
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, [carritoKey]);

  // Eliminar producto del carrito
  const eliminarProducto = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
    localStorage.setItem(carritoKey, JSON.stringify(nuevoCarrito));
  };

  const comprarTodo = () => {
    Swal.fire({
      title: "Compra exitosa",
      text: "¡Gracias por tu compra!",
      icon: "success",
      confirmButtonText: "Ok",
    });
    setCarrito([]);
    localStorage.setItem(carritoKey, JSON.stringify([]));
  };

  if (!usuario) {
    return (
      <p className="text-danger">Debes iniciar sesión para ver tu carrito.</p>
    );
  }

  if (carrito.length === 0) {
    return <p className="text-muted">Tu carrito está vacío.</p>;
  }

  return (
    <div className="container">
      <table className="table mt-5 mb-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((producto, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{producto.producto}</td>
              <td>{producto.precio}</td>
              <td>
                <img
                  src={producto.imagen}
                  alt={producto.producto}
                  style={{ width: "80px", objectFit: "contain" }}
                />
              </td>
              <td>
                <Boton_5
                  nombre="Eliminar"
                  onClick={() => eliminarProducto(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Boton_2 nombre="Comprar Todo" onClick={comprarTodo} />
    </div>
  );
}

export default TablaCarrito;
