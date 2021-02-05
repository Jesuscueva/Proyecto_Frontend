import React from 'react'

const PosInfoScreen = () => {
    return (
        <article className="article-izq">
            <div className="article_logo">
                <img src="#" alt="Logo de la Empresa"/>
            </div>
            <div className="article_datos">
                    <ul className="article_lista">
                        <li className="lista_dato"><i class="fas fa-map-marked-alt"></i>Dirección: <br/>
                        Mz G.lote 14
                        </li>
                        <li className="lista_dato"><i class="fas fa-phone-square-alt"></i>Teléfono <br/>
                        11111111
                        </li>
                        <li className="lista_dato"><i class="fas fa-at"></i>Mail <br/>
                        @gmallañ
                        </li>
                    </ul>
                </div>
        </article>
    )
}

export default PosInfoScreen
