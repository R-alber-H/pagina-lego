import { useState, useEffect } from "react";
import Card from "./card.jsx";
import producto_lego from "../assets/producto_lego.jpg";
import producto_lego_2 from "../assets/producto_lego _2.jpg";
import producto_lego_3 from "../assets/producto_lego_3.jpg";
import Swal from "sweetalert2";

function Seccion2_cliente() {
  const usuario = localStorage.getItem("usuarioActual"); // ✅ Obtener usuario actual
  const carritoKey = `carrito_${usuario}`; // ✅ Carrito personalizado por usuario

  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem(carritoKey);
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  useEffect(() => {
    localStorage.setItem(carritoKey, JSON.stringify(carrito));
  }, [carrito, carritoKey]); // Escuchamos también si cambia la key

  const agregarAlCarrito = (producto) => {
    if (!usuario) {
      Swal.fire({
        title: "Usuario no identificado",
        text: "Debes iniciar sesión para agregar productos al carrito.",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    const nuevoCarrito = [...carrito, producto];
    setCarrito(nuevoCarrito);
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Producto agregado al carrito 🛒",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
    console.log("Producto agregado:", producto);
  };

  return (
    <div className="mb-4">
      <h2 className="mb-4 mt-4">DC Comics Super Heroes</h2>
      <div className="d-flex gap-3 justify-content-between">
        <Card
          imagen={producto_lego}
          producto="Disney Pixar Luxo Jr."
          precio="$60.00"
          onAgregar={agregarAlCarrito}
        />
        <Card
          imagen={producto_lego_2}
          producto="Lego City Police"
          precio="$45.00"
          onAgregar={agregarAlCarrito}
        />
        <Card
          imagen={producto_lego_3}
          producto="Lego Friends Café"
          precio="$52.99"
          onAgregar={agregarAlCarrito}
        />
        <Card
          imagen={producto_lego}
          producto="Disney Pixar Luxo Jr."
          precio="$60.00"
          onAgregar={agregarAlCarrito}
        />
      </div>
    </div>
  );
}

export default Seccion2_cliente;
