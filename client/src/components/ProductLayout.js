import React,{useEffect,useState} from 'react'
import '../css/productLayout.css'
import CheckCategories from '../core/CheckCategories';
import {getCategories} from '../core/CoreApi'
/**
* @author
* @function ProductLayout
**/

const ProductLayout = (props) => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price:[]}
  });

  const [categories, setCategories ] = useState([]);
    const [error, setError] = useState(false);

  const init = () => {
    getCategories().then( data =>{
      if(data.error){
        setError(data.error)
      }else{
        setCategories(data)
      }
    })
  }

    useEffect(() => {
     init()
    }, [])

    const handleFilters = (filters, filterBy) => {
      //console.log(filters, filterBy,'hi filters')
      const newFilters = {...myFilters}
      newFilters.filters[filterBy] = filters;
      setMyFilters(newFilters)
    }
  return(
    
      <div className="productBanner">
      <div className="product-title">
          <h2>vores produkter</h2>
           <div className="underline2"></div>
          <p>kendskab til vores produkt processer</p>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <CheckCategories
                            categories={categories}
                            handleFilters={filters =>
                                handleFilters(filters, "category")
                            }
                        />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
           {JSON.stringify(myFilters)}
          </div>
        </div>
      </div>
    </div>
    
    
   )

 }

export default ProductLayout