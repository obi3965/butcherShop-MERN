import React from 'react'
import '../css/services.css'
/**
* @author
* @function Service
**/

const Service = (props) => {
  return(
    <div className="services">
        <div className="container">
            
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div className="service-box">
                      <img src=".././img/beef.png" alt="beef"/>
                      
                  </div>
                  <div className="service-items">
                      <h4>kalve kød</h4>
                      <p>Nunc elementum purus ex iaculis elfend. Curabitur bibendum odio</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="service-box">
                      <img src=".././img/chicken.png" alt="chicken"/>
                  </div>
                  <div className="service-items">
                      <h4>kyllinger</h4>
                      <p>Nunc elementum purus ex iaculis elfend. Curabitur bibendum odio</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="service-box">
                      <img src=".././img/lamb.png" alt="lamb"/>
                  </div>
                  <div className="service-items">
                      <h4>lamme kød</h4>
                      <p>Nunc elementum purus ex iaculis elfend. Curabitur bibendum odio</p>
                  </div>
                </div>
            </div>
            
        </div>
    </div>
   )

 }

export default Service