import Boton_1 from "./boton_1";
import imageNotFound from "../assets/lego-not-found.png";

const NotFoundBanner = () => {
  return (
    <div
      className="banner-not-found d-flex align-items-center justify-content-start text-center"
      style={{ overflow: "hidden", height: 800, marginBottom: 40 }}
    >
      <img
        src={imageNotFound}
        alt=""
        style={{ height: 1058, objectFit: "cover" }}
      />
      <div className="overlay text-end p-4 ">
        <h1
          className="mb-3 fw-bold"
          style={{
            fontFamily: "Poppins",
            fontWeight: 700,
            fontSize: "92px",
            color: "white",
          }}
        >
          ¡OH, VAYA!
        </h1>
        <h2
          className="mb-3 fw-bold"
          style={{ color: "white", fontSize: "30px", paddingLeft: 20 }}
        >
          No podemos encontrar esta página.
        </h2>
        <p
          style={{
            color: "white",
            fontSize: "20px",
            paddingLeft: 20,
          }}
        >
          Intentaremos no perder la cabeza al respecto, pero
          <br /> si lo hacemos... nos la colocamos de nuevo.
        </p>

        <Boton_1 nombre="Volver a la página de inicio" color="#005ad2" />
      </div>
    </div>
  );
};

export default NotFoundBanner;
