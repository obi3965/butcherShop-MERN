import React from 'react'
import { Link } from 'react-router-dom'
import '../css/banner.css'



const Banner = (props) => {
  return(
    <div>
        <div className="banner">
          <div className="banner-items">
              <h1>roskilde slagter</h1>
              <h2>fresh meat all the time</h2>
              <p>we serve our customers with the demands... </p>
              <Link to="/meats" className="btn btn-danger">shop now</Link>
          </div>
          
        </div>
    </div>
   )

 }

export default Banner