import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { getProducts } from "./CoreApi";
import Card from "./Card";
import Banner from "../components/Banner";
import ProductLayout from "../components/ProductLayout";
import About from "../components/About";
import Service from "../components/Service";

const Home = () => {
  const [byArrival, setByArrival] = useState([]);
  const [bySell, setBySell] = useState([]);
  const [error, setError] = useState(false);

  //load the products by sell
  const loadProductBySell = () => {
    getProducts("sold").then((data) => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setBySell(data);
      }
    });
  };

  //load the products by Arrival
  const loadProductByArrival = () => {
    getProducts("sold").then((data) => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductBySell();
    loadProductByArrival();
  }, []);

  return (
    <>
      <Banner />

      <Service />

      <About />
      <ProductLayout />

     <div className="container">
     <Layout
            title="FullStack React Node MongoDB Ecommerce App"
            description="Node React E-commerce App"
           >
        
            {/* <Search /> */}
            <div className="product-title-2">
          <h1>product by sell</h1>
          <div className="underline4"></div>
        </div>
            <div className="container">
            <div className="row">
                {byArrival.map((product, i) => (
                    <div key={i} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <Card product={product} />
                    </div>
                ))}
            </div>
            </div>

            <div className="product-title">
          <h1>product by arrival</h1>
          <div className="underline3">
        </div>
        </div>
            <div className="container">
            <div className="row">
                {bySell.map((product, i) => (
                    <div key={i} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <Card product={product} />
                    </div>
                ))}
            </div>
            </div>
        </Layout>
      
     </div>
       


        
    </>
  );
};

export default Home;
