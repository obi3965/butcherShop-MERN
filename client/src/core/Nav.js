import React,{Fragment,useState} from 'react'
import { withRouter, NavLink, Link } from "react-router-dom";
import { signout, isAuthenticated } from '../auth';
import { itemTotal } from "./CartHelper";

import '../css/nav.css'

/**
* @author
* @function Menu
**/

const Menu = ({ history }) => {
    const [ click, setClick ] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
  return(
   
  <>
   <nav className='navbar shadow-sm'>
        <div className='navbar-container'>
          <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
            roskilde slagter
            <div className="underline1"></div>
            <div className="underline1"></div>
          </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/' className='nav-links' activeClassName="is-active" onClick={closeMobileMenu} exact={true}>
                Home
              </NavLink>
            </li>
           
            <li className='nav-item'>
              <NavLink to='/meats' className='nav-links' activeClassName="is-active" onClick={closeMobileMenu} exact={true}>
                meats
              </NavLink>
            </li>
           
            
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
               <li className='nav-item'>
              <NavLink
                to='/user/dashboard'
                className='nav-links' activeClassName="is-active"
                onClick={closeMobileMenu}
              >
                Dashboard
              </NavLink>
            </li>
            )}

           {isAuthenticated() && isAuthenticated().user.role === 1 && (
               <li className='nav-item'>
              <NavLink
                to='/admin/dashboard'
                className='nav-links' activeClassName="is-active"
                onClick={closeMobileMenu}
              >
               Admin Dashboard
              </NavLink>
            </li>
            )}
            <div className="user">
              {!isAuthenticated() &&(
                <Fragment>
                   <li className='nav-item'>
              <NavLink 
              to='/signin' className="user-reg"
              
              onClick={closeMobileMenu} > 
                 sign in
              </NavLink>
              </li>

              <li className='nav-item'>
              <NavLink className="user-reg"
              to='/signup'
              onClick={closeMobileMenu} 
              > 
                 sign up
              </NavLink>
            </li>
                </Fragment>
              ) }
            
            </div>
            {isAuthenticated() && (
            <li className='nav-item'>
              <NavLink className="btn btn-signout"
              to='/signout'
              onClick={()=> signout(() =>{
                history.push('/')
            })}
              > 
                 sign out
              </NavLink>
            </li>
            )}

           <li className="nav-item">
                <Link to="/cart"
                    className='nav-links' activeClassName="is-active"
                    onClick={closeMobileMenu}
                >
                    Cart{" "}
                    <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup>
                </Link>
            </li>

           
           
          </ul>
          
        </div>
        
      </nav>
  
  </>
    
   )

 }

export default withRouter(Menu)