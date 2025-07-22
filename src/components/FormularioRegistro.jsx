import Boton_1 from "./boton_1.jsx";
import legobloque from "../assets/legobloque.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./FormularioRegistro.module.css";
import Swal from "sweetalert2";

function Formulario_registro() {
  const [clientes, setClientes] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [contraseña_2, setContraseña_2] = useState("");

  const navigate = useNavigate();
  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página

    if (
      !nombre.trim() ||
      !apellido.trim() ||
      !correo.trim() ||
      !contraseña.trim() ||
      !contraseña_2.trim()
    ) {
      Swal.fire({
        title: "Error",
        text: "Todos los campos son obligatorios",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    // Validar nombre y apellido (solo letras)
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
    if (!soloLetras.test(nombre) || !soloLetras.test(apellido)) {
      Swal.fire({
        title: "Error",
        text: "Nombre y apellido solo deben contener letras",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    // Validar correo simple
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
      Swal.fire({
        title: "Error",
        text: "Correo electrónico inválido",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    // Validar longitud mínima de contraseña
    if (contraseña.length < 6) {
      Swal.fire({
        title: "Error",
        text: "La contraseña debe tener al menos 6 caracteres",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    // Validación simple de igualdad de contraseñas
    if (contraseña !== contraseña_2) {
      Swal.fire({
        title: "Error",
        text: "Las contraseñas no coinciden",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    const nuevoCliente = { nombre, apellido, correo, contraseña };
    const nuevosClientes = [...clientes, nuevoCliente];

    setClientes([...clientes, nuevoCliente]);
    console.log("Cliente registrado:", nuevoCliente);
    localStorage.setItem("clientes", JSON.stringify(nuevosClientes));
    Swal.fire({
      title: "¡Registro exitoso!",
      text: "Su cuenta ha sido creada exitosamente, se redigira a la pagina principal",
      icon: "success",
      confirmButtonText: "Ok",
    }).then(() => {
      localStorage.setItem("usuarioActual", correo);
      setNombre("");
      setApellido("");
      setCorreo("");
      setContraseña("");
      setContraseña_2("");
      navigate("/pagina_cliente");
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center col-12">
      <div className="col-6 d-flex justify-content-end">
        <div
          className="col-8 p-4 rounded-4 mt-4 d-flex justify-content-center align-items-center flex-column"
          style={{ backgroundColor: "#D9D9D9" }}
        >
          <h3 className="mb-4">Registra tus datos</h3>
          <p className="mb-4">Por favor, rellena los siguientes campos</p>
          <form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center align-items-center flex-column w-75"
          >
            <div className="mb-3 w-100">
              <input
                type="text"
                className={`form-control ${styles.input}`}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
              />
            </div>
            <div className="mb-3 w-100">
              <input
                type="text"
                className={`form-control ${styles.input}`}
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                placeholder="Apellido"
              />
            </div>
            <div className="mb-3 w-100">
              <input
                type="email"
                className={`form-control ${styles.input}`}
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="Correo electrónico"
              />
            </div>
            <div className="mb-3 w-100">
              <input
                type="password"
                className={`form-control ${styles.input}`}
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                placeholder="Contraseña"
              />
            </div>
            <div className="mb-3 w-100">
              <input
                type="password"
                className={`form-control ${styles.input}`}
                value={contraseña_2}
                onChange={(e) => setContraseña_2(e.target.value)}
                placeholder="Confirmar contraseña"
              />
            </div>
            <p className="mt-3 text-black">
              ¿Ya tienes una cuenta?{" "}
              <Link
                to="/login"
                className="text-primary text-decoration-none text-black"
              >
                Inicia sesión
              </Link>
            </p>
            <Boton_1 nombre="Crear cuenta" type="submit" />
          </form>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-11">
            <img src={legobloque} alt="bloque lego" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulario_registro;
