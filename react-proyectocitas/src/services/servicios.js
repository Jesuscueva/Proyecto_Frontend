import { URL_BACKEND2 } from "../environments/environments"
const URL_BACKEND = "https://600c6acbf979dd001745bf5b.mockapi.io"
const URL_BACKEND3 = "https://6018d613971d850017a404d4.mockapi.io/";



//SERVICIO PARA EL CLIENTE 

//SERVICIO JESUS
export const getServicios = async () =>{
    const peticion = await fetch(`${URL_BACKEND}/servicios_veterinario`)
    const data = await peticion.json()
    return data
}

export const getHoras = async () =>{
    const peticion = await fetch(`${URL_BACKEND}/horaspor_seleccionar`)
    const data = await peticion.json()
    return data
}

export const getCitasRegistradas = async ()=>{
    const peticion = await fetch(`${URL_BACKEND2}/citas`)
    const data = await peticion.json()
    return data
}

export  const posCitasRegistradas = async (objCita) => {
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

