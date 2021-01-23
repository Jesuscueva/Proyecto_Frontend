import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const AdminNavBar = () => {
  return (
    <nav class="nav navegador flex-column">
      <figure>
        <img src="#" alt="LOGO DE LA EMPRESA" />
      </figure>
      <Link to="/admin/home_empresa/tabla_citas" class="nav-link active" aria-current="page" href="#">
        Tabla de Citas
      </Link>
      <Link to="/admin/home_empresa/datos_veterinario" class="nav-link" href="#">
        Datos de Veterinario
      </Link >
      <a class="nav-link" href="#">
        Datos de Veterinario
      </a>
      <a class="nav-link" href="#">
        Datos de Veterinario
      </a>
    </nav>
  );
};

export default AdminNavBar;
