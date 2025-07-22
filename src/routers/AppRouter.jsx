import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import PaginaCliente from "../pages/PaginaCliente";
import PaginaCarrito from "../pages/PaginaCarrito";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Registro />} />
        <Route path="pagina_cliente" element={<PaginaCliente />} />
        <Route path="pagina_carrito" element={<PaginaCarrito />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
