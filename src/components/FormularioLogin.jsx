import Boton_1 from "./boton_1.jsx";
import legobloque_2 from "../assets/legobloque_2.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./FormularioLogin.module.css";
import Swal from "sweetalert2";

function Formulario_login() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página

    const clientesGuardados =
      JSON.parse(localStorage.getItem("clientes")) || [];

    const clienteEncontrado = clientesGuardados.find(
      (cliente) =>
        cliente.correo === correo && cliente.contraseña === contraseña
    );

    if (clienteEncontrado) {
      localStorage.setItem("usuarioActual", correo);
      navigate("/pagina_cliente");
    } else {
      Swal.fire({
        title: "Datos incorrectos",
        text: "Correo o contraseña incorrectos",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center col-12">
      <div className="col-6  d-flex justify-content-end ">
        <div
          className="col-8 p-5 rounded-4 mt-4 d-flex justify-content-center align-items-center flex-column"
          style={{ backgroundColor: "#D9D9D9" }}
        >
          <h3 className="mb-4">Iniciar sesion</h3>
          <p className="mb-4">Por favor, introduce tu correo y contraseña</p>
          <form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center align-items-center flex-column w-100 mt-3"
          >
            <div className="mb-4">
              <input
                type="email"
                className={styles.input}
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="Correo electrónico"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className={styles.input}
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                placeholder="Contraseña"
              />
            </div>
            <p className="mb-4 mt-4 text-black">
              ¿Nuevo cliente?{" "}
              <Link
                to="/registro"
                className="text-primary text-decoration-none text-black"
              >
                Crear una cuenta
              </Link>
            </p>
            <Boton_1 nombre="Iniciar sesion" type="submit" />
          </form>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-8 ">
            <img src={legobloque_2} alt="bloque lego" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulario_login;
