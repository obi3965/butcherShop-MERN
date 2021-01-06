import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import '../css/card.css'
import Image from './Image'

const Card = ({ product }) => {
  return (
    <>
             <div className="product-grid">
              <div className="product-image">
                <div className="pic-1">
                 <Image item={product} url="product" />
                  
                </div>
                <ul className="social">
                  <li>
                    <Link to="">
                      <i className="fa fa-search" />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="fa fa-shopping-bag" />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="fa fa-shopping-cart" />
                    </Link>
                  </li>
                </ul>
                
                
              </div>
             
              <div className="product-content">
                <h3 className="title">
                  <Link to=""> {product.name} </Link>
                </h3>
                <div className="price">
                     {product.price} kr
                 
                </div>
                <button className="add-to-cart" >
                  Add To Cart
                </button>
                <Link to={`/product/${product._id}`}>
                <button className="view" >
                 view details
                </button>
                </Link>
                
              </div>
            </div> 
        
    </>
  );
}

export default Card