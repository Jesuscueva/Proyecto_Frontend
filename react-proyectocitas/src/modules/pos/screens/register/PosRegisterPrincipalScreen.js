import React from 'react'
import RegisterFooter from './components/RegisterFooter'
import RegisterForm from './components/RegisterForm'
import RegisterHeader from './components/RegisterHeader'

const PosRegisterPrincipalScreen = () => {
    return (
        <>
          <main className="main">
                <RegisterHeader />
                <RegisterForm/>
            </main>

            <RegisterFooter/>
        </>
    )
}

export default PosRegisterPrincipalScreen
