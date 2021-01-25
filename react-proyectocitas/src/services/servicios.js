const URL_BACKEND = "https://600c6acbf979dd001745bf5b.mockapi.io"


export const getServicios = async () =>{
    const peticion = await fetch(`${URL_BACKEND}/servicios_veterinario`)
    const data = await peticion.json()
    return data
}