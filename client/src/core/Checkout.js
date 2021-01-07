import React, { useState, useEffect } from 'react';
//import { getProducts, getBraintreeClientToken, processPayment, createOrder } from './apiCore';
import { emptyCart } from './CartHelper';
import Card from './Card';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';

//import DropIn from 'braintree-web-drop-in-react';

/**
* @author
* @function Checkout
**/

const Checkout = ({ products, setRun = f => f, run = undefined }) => {
    
    //get the cart total
    const getTotal = () => {
       return products.reduce((currentValue, nextValue) => {
           return currentValue + nextValue.count * nextValue.price
       }, 0)
    }

//signin the user to checkout the cart
const showCheckout = () => {
    return isAuthenticated() ? (
        <button className="btn btn-success">checkout</button>
    ) : (
        <Link to="/signin">
            <button className="btn btn-primary">Sign in to checkout</button>
        </Link>
    );
};

  return(
    <div>
       <h2>Total: kr {getTotal()}</h2>

       {showCheckout()}
    </div>
   )

 }

export default Checkout