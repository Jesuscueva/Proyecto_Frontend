import React from 'react'
import testi from "../../../../../assets/img/testimonio1-photo.png"

const PosTestimonio = ({ obj }) => {
    return (
        <div>
            <div className="">
              <img src={testi} alt="Usuario con su testimonio" />
              <h4>{obj.nom_usu}</h4>
              <p>{obj.text_usu}</p>
             </div>
        </div>
    )
}

export default PosTestimonio
