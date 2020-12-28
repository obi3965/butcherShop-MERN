import React from 'react'
import Layout from '../core/Layout'
import '../css/dashboard.css'
import { isAuthenticated } from '../auth'
import { Link } from 'react-router-dom'
/**
* @author
* @function AdminDashboard
**/

const AdminDashboard = (props) => {

    const {user: {_id, name, email, role}} = isAuthenticated()

    const adminLinks = () =>{
        return (
            <div className="card">
                <h4 className="card-header">user links</h4>
                 <ul className="list-group">
                     <li className="list-group-item">
                         <Link className="nav-link" to="/category/create">create category</Link>
                     </li>
                     <li className="list-group-item">
                     <Link className="nav-link" to="/product/create">create product</Link>
                     </li>
                 </ul>
            </div>
        )
    }

   const adminInfo = () =>{
       return (
       
        <div className="card profile-card">
          <figure>
            <input id="fab" type="checkbox" className="fab" />
            <label htmlFor="fab" className="toggle">+</label>
             
          </figure>
          <div className="card-block text-xs-center">
            <p className="h4 card-title font-weight-bold"> {name} </p>
            <p className="h6 card-subtitle text-muted"> {email} </p><br />
            <p className="h6 card-subtitle text-muted"> {role === 1 ? "Admin" : "Registered user"} </p><br />
          </div>
        </div>
      
       )
   }

   
  return(
    <Layout title="Dashboard" description={`G'day ${name}`}>
       <div className="container">
       <div className="row py-3 flex-items-sm-center">
     <div className="col-lg-4 col-xs-12 col-sm-3 py-2 clearfix">
       {adminLinks()}
     </div>
         <div className="col-lg-8 col-xs-12 col-sm-3 py-2 clearfix">
         {adminInfo()}
        
     </div>
      </div>
       </div>
    </Layout>
   )

 }

export default AdminDashboard
