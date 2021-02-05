import React from 'react'
import PosDashboardScreen from './components/PosDashboardScreen'
import PosInfoScreen from './components/PosInfoScreen'
import PosSliderScreen from './components/PosSliderScreen'


const PosPrincipalUsuarioScreens = () => {
    return (
        <>
            <main className="contenedor_usuario">
            <PosSliderScreen />
            <PosDashboardScreen />
            <PosInfoScreen />
            </main>
        </>
    )
}

export default PosPrincipalUsuarioScreens
