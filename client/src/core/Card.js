import React,{ useState } from "react";
import { Link, Redirect } from "react-router-dom";
import '../css/card.css'
import Image from './Image'
import { addItem, updateItem, removeItem } from './CartHelper'



const Card = ({ 
  product, 
  showViewProductBtn = true,
  showAddToCartButton = true,
  showRemoveProductButton = false,
  cartUpdate = false,
  setRun = f => f,
  run = undefined
}) => {

  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

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


  const handleChange = productId => event => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
          </div>
        </div>
      )
    );
  };

  const showRemoveButton = showRemoveProductButton => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove Product
        </button>
      )
    );
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
                {showRemoveButton(showRemoveProductButton)}
                 {showViewBtn(showViewProductBtn)}
                 {showCartUpdateOptions(cartUpdate)}
                 
               
                
              </div>
            </div> 
        
    </>
  );
}

export default Card