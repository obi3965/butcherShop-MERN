import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom'
import '../css/nav.css'
//  const isActive = (history, path) => {
//   if(history.location.pathname === path){
//       return { color: '#000'}
//   }else{
//       return {color: '#ff304f'}
//   }
// }

const Menu = ({history}) => {
 

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-md">
        <div className="container">

          <Link className="navbar-brand" to="/">
             <span>roskilde slagter</span>
             <div className="underline1"></div>
             <div className="underline1"></div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="is-active"  to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="is-active" to="/kalve">Kalve kød</NavLink>
              </li>
             
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="is-active" to="/lamme">lamme kød</NavLink>
              </li>
             
            </ul>
            
            <div className="user ml-auto d-flex">
            <li className="nav-item">
                <NavLink className="nav-link signin" activeClassName="is-active" to="/signin">signin</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link signup" activeClassName="is-active" to="/signup">signup</NavLink>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter (Menu);