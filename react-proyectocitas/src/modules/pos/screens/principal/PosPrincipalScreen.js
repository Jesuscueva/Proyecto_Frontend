import React from 'react';
import PosFooter from './components/PosFooter';
import PosHeader from './components/PosHeader'
import PosHero from './components/PosHero';
import PosServicios from './components/PosServicios';
import PosTestimonios from './components/PosTestimonios';
import PosVeterinarios from './components/PosVeterinarios';

const PosPrincipalScreen = () => {
    return (
        <>
            <PosHeader />
            <main>
                <PosHero />
                <PosServicios />
                <PosVeterinarios />
                <PosTestimonios />
                <PosFooter />
            </main>
        </>
    )
}

export default PosPrincipalScreen
