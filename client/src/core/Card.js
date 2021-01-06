import React,{ useState } from "react";
import { Link, Redirect } from "react-router-dom";
import '../css/card.css'
import Image from './Image'
import { addItem } from './CartHelper'



const Card = ({ 
  product, 
  showViewProductBtn = true,
  showAddToCartButton = true
}) => {

  const [redirect, setRedirect] = useState(false);


  //view the single product button
  const showViewBtn = showViewProductBtn => {
    return (
      showViewProductBtn && (
         <Link to={`/product/${product._id}`}>
      <button className="view" >
       view details
      </button>
      </Link>
      )  
    )
  }


  //redirect user to the cart
  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  //show add to cart button
  const showAddToCartBtn = showAddToCartButton  => {
   return (
     showAddToCartButton && (
      <button className="add-to-cart" onClick={addToCart} >
      Add To Cart
    </button>
     )
   )
  }
  const addToCart = () => {
    addItem(product, () => {
    setRedirect(true)
    })
  }



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
                {shouldRedirect(redirect)}
                
              </div>
             
              <div className="product-content">
                <h3 className="title">
                  <Link to=""> {product.name} </Link>
                </h3>
                <div className="price">
                     {product.price} kr
                 
                </div>
               
                 
                 {showAddToCartBtn(showAddToCartButton)}
                
                 {showViewBtn(showViewProductBtn)}
               
                
               
                
              </div>
            </div> 
        
    </>
  );
}

export default Card