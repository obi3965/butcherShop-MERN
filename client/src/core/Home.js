import React, {useEffect, useState} from 'react'
import Layout from './Layout'
import { getProducts } from './CoreApi'
import Card from './Card';
import Banner from '../components/Banner'
import ProductLayout from '../components/ProductLayout'
import About from '../components/About'
const Home = () => {
const [byArrival,setByArrival] = useState([]);
const [bySell,setBySell] = useState([]);
const [ error, setError] = useState(false);


//load the products by sell
const loadProductBySell = () =>{
  getProducts('sold').then(data =>{
    console.log(data)
    if(data.error){
      setError(data.error)
    }else{
      setBySell(data)
    }
  })
}

//load the products by Arrival
const loadProductByArrival = () =>{
  getProducts('sold').then(data =>{
    console.log(data)
    if(data.error){
      setError(data.error)
    }else{
      setByArrival(data)
    }
  })
}

useEffect(() => {
  loadProductBySell()
  loadProductByArrival()
}, []);

  return (
    <>
  <Banner />
  <About/>
  <ProductLayout />
 
    <Layout title="home page" description="home desc">
      
       <div className="row">
         <h1>product by arrival</h1>
         {byArrival.map(( product, i) => (
           <div key={i} className="col-md-4">
              <Card product={ product } />
           </div>
         )) }
       </div>

       <div className="row">
         <h1>product be sell</h1>
         {bySell.map(( product, i) => (
           <div key={i} className="col-md-4">
              <Card product={ product } />
           </div>
         )) }
       </div>
    </Layout> 
    </>
  )
}

export default Home
