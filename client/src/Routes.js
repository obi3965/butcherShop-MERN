import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignUp from './user/SignUp'
import SignIn from './user/SignIn'
import Home from './core/Home'
import Menu from './core/Nav'
import Dashboard from './user/UserDashboard'
import PrivateRoute from './auth/PrivateRoute'
import AdminRoute from './auth/AdminRoute'
import AdminDashboard from './user/AdminDashboard'
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import Meats from './core/Meats'
import Product from './core/Product'
import Cart from './core/Cart'


 const Routes = () => {
    

    return (
        <>
        <BrowserRouter>
        <Menu/>
        <Switch>
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path='/' exact component={ Home } />
            <Route path="/meats" exact component={ Meats } />
            <Route path='/cart' exact component={ Cart } />
            {/* <Route path='/dashboard' exact component={ Dashboard } /> */}
            <PrivateRoute path='/user/dashboard' exact component={ Dashboard} />
            <AdminRoute path='/admin/dashboard' exact component={ AdminDashboard } />
            <AdminRoute path='/category/create' exact component={ AddCategory } />
            <AdminRoute path='/product/create' exact component={ AddProduct } />
            <Route path='/product/:productId' exact component={ Product } />
           
        </Switch>
        </BrowserRouter>
            
        </>
    )
}
export default Routes