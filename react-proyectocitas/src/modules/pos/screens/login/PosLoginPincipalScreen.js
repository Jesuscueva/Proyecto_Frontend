import React from 'react'
import LoginFooter from './components/LoginFooter'
import LoginForm from './components/LoginForm'
import LoginHeader from './components/LoginHeader'


const PosLoginPincipalScreen = () => {
    return (
        <>
            <main className="main">
            <LoginHeader />
            <LoginForm />
            </main>
            <LoginFooter />
        </>
    )
}

export default PosLoginPincipalScreen
