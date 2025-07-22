import Boton_3 from "./boton_3.jsx";
import Card from "./card.jsx";
import img_1 from "../assets/img_1.webp";
import img_2 from "../assets/img_2.webp";
import img_3 from "../assets/img_3.webp";
import img_4 from "../assets/img_4.webp";

function Seccion_2() {
  return (
    <div className="mb-4">
      <h2
        className="mb-4 mt-4 text-center"
        style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "36px" }}
      >
        Encuentra el set perfecto
      </h2>
      <div className="mb-4  d-flex flex-row gap-3">
        <Boton_3 nombre="Destacados" to="/iniciar sesion" />
        <Boton_3 nombre="Recomendados" to="/iniciar sesion" />
        <Boton_3 nombre="Niñas" to="/iniciar sesion" />
      </div>
      <div className="d-flex gap-3 justify-content-between">
        <Card imagen={img_1} producto="Disney Pixar Luxo Jr." precio="$60.00" />
        <Card imagen={img_2} producto="Lego City Police" precio="$45.00" />
        <Card imagen={img_3} producto="Lego Friends Café" precio="$52.99" />
        <Card imagen={img_4} producto="Lego Technic Bugatti" precio="$150.00" />
      </div>
    </div>
  );
}

export default Seccion_2;
