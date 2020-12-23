
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignUp from './user/SignUp'
import SignIn from './user/SignIn'


import React from 'react'
import Home from './core/Home'
import Menu from './core/Nav'

 const Routes = () => {
    

    return (
        <>
        <BrowserRouter>
        <Menu/>
        <Switch>
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path='/' exact component={ Home } />
        </Switch>
        </BrowserRouter>
            
        </>
    )
}
export default Routes