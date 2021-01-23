import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminLoginScreen = () => {
  return (
    <menu className="container-fluid menu_login">
     <div className="row">
         <div className="col-lg-4 md-6 sm-5">
             <div className="card">
                 <div className="card-body">
                     <form action="">
                         <div className="form-group">
                             <label htmlFor="">Usuario Admi</label>
                             <input type="text" placeholder="nombre@empresa.com"
                             className="form-control" id="correo" name="correo"/>
                         </div>
                         <div className="form-group">
                             <label htmlFor="">Password</label>
                             <input type="password" name="password"
                             id="password" className="form-control"  />
                         </div>
                         <div className="form-group">
                             <button className="btn btn-primary" type="submit">Iniciar Sesión</button>
                         </div>
                     </form>
                 </div>
             </div>
         </div>
     </div>
    </menu>
  );
};

export default AdminLoginScreen;
