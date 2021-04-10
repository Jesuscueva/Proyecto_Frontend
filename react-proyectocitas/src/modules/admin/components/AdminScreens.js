import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminDatosVeterinarioScreen from "./screens/datosDeVeterinario/AdminDatosVeterinarioScreen";
import AdminNavBar from "./screens/sideBar/AdminNavBar";
import AdminCitasScreen from "./screens/tablaDeCitas/AdminCitasScreen";

const AdminScreens = () => {
  return (
    <>
      <div className="admin_contenedor">
        <AdminNavBar />

        <Switch>
          <Route
            path="/admin/home_empresa/tabla_citas"
            component={AdminCitasScreen}
          />
          <Route
            path="/admin/home_empresa/datos_veterinario"
            component={AdminDatosVeterinarioScreen}
          />
        </Switch>
      </div>
    </>
  );
};

export default AdminScreens;
