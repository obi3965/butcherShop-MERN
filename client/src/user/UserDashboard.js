import React from 'react'
import Layout from '../core/Layout'
import '../css/dashboard.css'
import { isAuthenticated } from '../auth'
/**
* @author
* @function Dashboard
**/

const Dashboard = (props) => {

    const {user: {_id, name, email, role}} = isAuthenticated()

  return(
    <Layout title="Dashboard" description="user dashboard">
       <div>
       <div className="row py-3 flex-items-sm-center">
        {/*
User Card
*/}
        <div className="col-xs-12 col-sm-3 py-2 clearfix">
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
        </div>
      </div>
       </div>
    </Layout>
   )

 }

export default Dashboard
