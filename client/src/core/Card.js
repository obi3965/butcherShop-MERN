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
                    <a href ="">
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li>
                    <a href ="">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href ="">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
                
                
              </div>
             
              <div className="product-content">
                <h3 className="title">
                  <a href="#"> {product.name} </a>
                </h3>
                <div className="price">
                     {product.price} kr
                 
                </div>
                <button className="add-to-cart" href>
                  Add To Cart
                </button>
                <button className="view" href>
                 view details
                </button>
              </div>
            </div> 
        
    </>
  );
}

export default Card