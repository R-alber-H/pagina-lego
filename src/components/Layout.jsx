import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Navbar_2 from "./navbar_2";
import Navbar_3 from "./navbar_3";
import Footer from "./footer";

const Layout = () => {
  const location = useLocation();

  let navbar;
  if (location.pathname === "/pagina_cliente") {
    navbar = <Navbar_3 />;
  } else if (location.pathname === "/pagina_carrito") {
    navbar = <Navbar_3 dentroDeCarritoDeCompras={true} />;
  } else if (
    location.pathname === "/login" ||
    location.pathname === "/registro"
  ) {
    navbar = <Navbar_2 />;
  } else {
    navbar = <Navbar />;
  }

  const mostrarFooter = !(
    location.pathname === "/login" ||
    location.pathname === "/registro" ||
    location.pathname === "/pagina_cliente" ||
    location.pathname === "/pagina_carrito"
  );

  return (
    <div className="container">
      {navbar}
      <main>
        <Outlet />
      </main>
      {mostrarFooter && <Footer />}
    </div>
  );
};

export default Layout;
