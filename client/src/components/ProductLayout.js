import React from 'react'
import '../css/productLayout.css'
import '../css/card.css'
import { Link } from 'react-router-dom'
import Search from '../core/Search'


/**
* @author
* @function ProductLayout
**/

const ProductLayout = () => {
  
  return(
    
      <div className="productBanner">
      <div className="product-banner-title">
          <h1>vores produkter</h1>
           <div className="underline2"></div>
          <p>kendskab til vores produkt processer</p>
          <br/>
          <Link className="buy-meats" to="/meats">buy meats</Link>
      </div>
      
    </div>
    
    
   )

 }

export default ProductLayout