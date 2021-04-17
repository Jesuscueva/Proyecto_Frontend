import { URL_BACKEND2 } from "../environments/environments"
const URL_BACKEND = "https://app-citas-grupo5.herokuapp.com"

//********** SERVICIOS ************//

//GET VETERINARIO 
export const getVeterinarios = async () =>{
    const peticion = await fetch(`${URL_BACKEND}/veterinario`)
    const data = await peticion.json()
    return data
}

//GET SERVICIO
export const getServicios = async () =>{
    const peticion = await fetch(`${URL_BACKEND}/servicio`)
    const data = await peticion.json()
    return data
}

//GET VETERINARIA
export const getVeterinaria = async () =>{
    const peticion = await fetch(`${URL_BACKEND}/veterinaria`)
    const data = await peticion.json()
    return data
}

//GET MASCOTA USUARIO
export const getMascotaUsuario = async (id) =>{
    const peticion = await fetch(`${URL_BACKEND}/traerMascotadelUsuario/${id}`);
    const data = await peticion.json()
    return data
}

//GET CITA
export const getCita = async () =>{
    const peticion = await fetch(`${URL_BACKEND}/traerCita`)
    const data = await peticion.json()
    return data
}

//POST CITA
export  const posCita = async (objCita) => {
    const peticion = await fetch(`${URL_BACKEND2}/citas`, {
        method: "POST",
        body: JSON.stringify(objCita),
        headers: {
            "content-type": "application/json"
        }
    });
    const data = await peticion.json()
    return data
}


export const getVeterinaria = async () =>{
    const peticion = await fetch(`${URL_BACKEND}/veterinaria`)
    const data = await peticion.json()
    return data
}



export const getHoras = async () =>{
    const peticion = await fetch(`${URL_BACKEND}/horaspor_seleccionar`)
    const data = await peticion.json()
    return data
}

export const getCitasRegistradas = async ()=>{
    const peticion = await fetch(`${URL_BACKEND2}/cita`)
    const data = await peticion.json()
    return data
}



//SERVICIO DE DIEGO


export const getUsuarios = async () => {
    const peticion = await fetch(`${URL_BACKEND2}/users`);
    const data = await peticion.json();
    return data;
}

export const postUsuario = async (objUsuario) => {
    const peticion = await fetch(`${URL_BACKEND2}/users`, {
        method: "POST",
        body: JSON.stringify(objUsuario),
        headers: {
            "Content-type": "application/json"
        }
    } );
    const data = await peticion.json();
    return data;
}

export const putUsuario = async (objUsuario) => {
    const peticion = await fetch(`${URL_BACKEND}/user/${objUsuario.prod_id}`, {
        method: "PUT",
        body: JSON.stringify(objUsuario),
        headers: {
            "Content-type": "application/json"
        } 
    });
    const data = await peticion.json();
    return data;
}
 
export const getTestimonios = async ()=> {
     const peticion = await fetch(`${URL_BACKEND2}/comentarios`);
     const data = await peticion.json()
     return data
 }

///SERVICIOS DE GIANCARLOS

export const getDatosConsultorio = async () => {
    const peticion = await fetch(`${URL_BACKEND3}/Consultorio`);
    const data = await peticion.json();
    return data; 
}

