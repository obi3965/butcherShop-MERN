import React from 'react'

/**
* @author
* @function Layout
**/

const Layout = ({ title = 'title', desc = 'desc', children }) => {
  return(
    <div className="layout">
       <div className="container">
           <div className="row">
               <div className="col-lg-12">
                {/* <h2>{title}</h2> */}
               </div>
               <div className="col-lg-12">
                {/* <h2>{desc}</h2> */}
                 <div className="child">
                     <div> {children} </div>
                 </div>
               </div>
           </div>
       </div>
    </div>
   )

 }

export default Layout