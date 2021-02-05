import React, { useEffect, useState} from "react";
import { Link, NavLink } from 'react-router-dom'
import Swal from "sweetalert2";
import { getUsuarios, postUsuario } from "../../../../../services/servicios";
import { v4 as uuidv4 } from 'uuid';


const formularioVacio = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  phone: "",
  token: ""
}

const RegisterForm = (props) => {
    console.log(props);

    const [formulario, setFormulario] = useState({...formularioVacio})
    const [usuarios, setUsuarios] = useState([])

    useEffect(()=>{
      getUsuarios().then((data)=>{
        setUsuarios(data)
      })
    })

    const handleChange = e => {
        setFormulario({
            ...formulario, 
            token: uuidv4(),
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
    
        //Consumir servicio
        postUsuario(formulario).then(data => {
          console.log(data);
         
            // alert(`Usuario ${data.name} registrado`);
          Swal.fire(
            `Bienvenido ${data.name} ${data.lastname}`,
            'Eres parte de la Empresa',
            'success'
          )

          setFormulario(formularioVacio);   })

    }


  


  return (
    <>
      <section className="form__wrapper pt-4">

        <h2 className="form__title">Registrate</h2>


        <form className="form" onSubmit={submit}>
      
          <input
            name="name"
            value={formulario.name}
            onChange={handleChange}
            type="text"
            className="form__input" required
            placeholder="Nombre"
          />
          <input
            name="lastname"
            value={formulario.lastname}
            onChange={handleChange} required
            type="text"
            className="form__input"
            placeholder="Apellido"
          />
          <input
            name="email"
            value={formulario.email}
            onChange={handleChange} required
            type="email"
            className="form__input"
            placeholder="Correo electrónico"
          />
          <input
            name="password"
            value={formulario.password}
            onChange={handleChange} required
            type="password"
            className="form__input"
            placeholder="Password"
          />
          <input
            name="phone"
            value={formulario.phone}
            onChange={handleChange} required
            type="text"
            className="form__input"
            placeholder="Número celular"
          />

          <button type="submit" className="boton_formulario">
            Register
          </button>

          <div className="form__links">
            <div className="links__top d-flex flex-column">
              <p>¿Ya estás registrado? </p>
              <Link className="nav-link h4" activeClassName="active" exact to="/pos/login">Inicia sesión</Link>
              
            </div>
          </div>

        </form>


      </section>
    </>
  );
};

export default RegisterForm;