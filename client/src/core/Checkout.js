import React, { useState, useEffect } from 'react';
import { getProducts, getBraintreeClientToken } from './CoreApi';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';

//import DropIn from 'braintree-web-drop-in-react';

/**
* @author
* @function Checkout
**/

const Checkout = ({ products, setRun = f => f, run = undefined }) => {
    
    const [data, setData] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: '',
        instance: {},
        address: ''
    });

    //get the token from the backend
    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;
    const getToken = (userId, token) => {
        getBraintreeClientToken(userId, token).then(data => {
            if (data.error) {
                console.log(data.error);
                setData({ ...data, error: data.error });
            } else {
                console.log(data);
                setData({ clientToken: data.clientToken });
            }
        });
    };

  useEffect(() => {
     getToken(userId, token)
  }, []);

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