import React from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import ProductLayout from '../components/ProductLayout'
import Service from '../components/Service'



const Home = () => {
    

    return (
        <>
          <div className="div">
          <Banner/>
          <Service/>
          </div>
          <About />
          <ProductLayout />
          
        </>
    )
}

export default Home
