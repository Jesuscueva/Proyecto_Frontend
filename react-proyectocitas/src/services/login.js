const URL_BACK = "https://app-citas-grupo5.herokuapp.com"

export const login = async (objlogin) => {
    const peticion = await fetch(`${URL_BACK}/login_custom`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(objlogin)
    })
    let data = await peticion.json()
    return data
}