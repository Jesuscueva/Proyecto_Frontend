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
            <a href="https://api.whatsapp.com/send?phone=51970624521" class="float" target="_blank">
            <i class="fab fa-whatsapp"></i>
            </a>
                <PosHero />
                <PosServicios/>
                <PosVeterinarios />
                <PosTestimonios />
                <PosFooter />
            </main>
        </>
    )
}

export default PosPrincipalScreen
