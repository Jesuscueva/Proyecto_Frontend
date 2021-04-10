import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminLoginScreen from './admiLogin/AdminLoginScreen'
import AdminScreens from './components/AdminScreens'

const AdminRouter = () => {
    return (
       <>
            <Switch>        
            <Route path="/admin/login" component={AdminLoginScreen}/>    
            <Route path="/admin/home_empresa" component={AdminScreens}/>    

            </Switch> 
       
       </>
    )
}

export default AdminRouter
