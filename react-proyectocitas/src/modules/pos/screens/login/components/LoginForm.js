import React, { useContext, useEffect, useState } from "react";
import logoFacebook from "../../../../../assets/img/facebook-sign-icon.png";
import logoGoogle from "../../../../../assets/img/google-sign-icon.jpg";
import { Link, NavLink, useHistory } from "react-router-dom";
import { getUsuarios } from "../../../../../services/servicios";
import PosContext from "../../../../../context/pos/posContext";
import { login } from "../../../../../services/login";
import AuthContext from "../../../../../context/auth/authContext";

const LoginForm = () => {
  const { sesionCorrecta } = useContext(AuthContext);

  const history = useHistory();

  const [formulario, setFormulario] = useState({
    usuarioEmail: " ",
    password: "",
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  const [incorrecto, setIncorrecto] = useState(true);

  const submit = (e) => {
    e.preventDefault();
    //Consumir servicio
    login(formulario).then((data) => {
      console.log(data);
      console.log("DATA DEL LOGINNNNN---------------");
      if (data.access) {
            console.log("correcto");
            sesionCorrecta(data.access);
            history.push('/pos/usuario')
      } else {
          alert("correo o contraseña Incorrecto");
      }
    });
  };

  return (
    <>
      <section className="form__wrapper">
        <h2 className="form__title">Bienvenido</h2>

        <form className="form" onSubmit={submit}>
          <a className="btn-style google">
            <figure className="icon__sign">
              <img src={logoGoogle} alt="" width="20" />
            </figure>
            <span>Ingresa con Google</span>
          </a>
          <a className="btn-style facebook">
            <figure className="icon__sign">
              <img src={logoFacebook} width="12" alt="" />
            </figure>
            Ingresa con Facebook
          </a>

          <p className="form__text">o ingresa con tus datos de sesión</p>

          <input
            name="usuarioEmail"
            value={formulario.usuarioEmail}
            onChange={handleChange}
            required
            type="email"
            className="form__input"
            placeholder="Correo electrónico"
          />
          <input
            name="password"
            value={formulario.password}
            onChange={handleChange}
            required
            type="password"
            className="form__input"
            placeholder="Contraseña"
          />
          <button type="submit" className="boton_formulario">
                Iniciar sesión
          </button>
          <div className="form__links">
            <div className="links__top">
              <p>¿Aún no tienes una cuenta? </p>
              <Link
                className="nav-link h6"
                activeClassName="active"
                exact
                to="/pos/register"
              >
                Registrate aquí
              </Link>
            </div>
            <a href="">
              <b>Olvidé mi contraseña</b>
            </a>
          </div>
        </form>
      </section>
    </>
  );
};

export default LoginForm;