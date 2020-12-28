import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignUp from './user/SignUp'
import SignIn from './user/SignIn'

import Home from './core/Home'
import Menu from './core/Nav'
import Dashboard from './user/UserDashboard'
import PrivateRoute from './auth/PrivateRoute'

 const Routes = () => {
    

    return (
        <>
        <BrowserRouter>
        <Menu/>
        <Switch>
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path='/' exact component={ Home } />
            {/* <Route path='/dashboard' exact component={ Dashboard } /> */}
            <PrivateRoute path='/dashboard' exact component={ Dashboard} />
        </Switch>
        </BrowserRouter>
            
        </>
    )
}
export default Routes