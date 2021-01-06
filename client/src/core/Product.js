import React,{ useState, useEffect} from 'react'
import Layout from './Layout'
import { read, listRelated } from './CoreApi'
import Card from './Card';
/**
* @author
* @function Product
**/

const Product = (props) => {

    const [product, setProduct] = useState([]);
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setRelatedProduct(data);
                    }
                });
            }
        });
    };

    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]);

  return(
    <div className="container-fluid"  title={product && product.name}
    description={product && product.description && product.description.substring(0, 100)}
    >

            <div className="container-fluid">
                <div className="row ">
                 <div className="col-lg-9">
                    
                     <div className="row d-flex justify-content-center align-items-center">
                       <div className="col-lg-6">
                            {product && product.description && <Card product={product} showViewProductButton={false} />}
                       </div>
                       <div className="col-lg-6">
                           <p> {product.description} </p>
                       </div>
                     </div>
                 
                 </div>

                 <div className="col-lg-3">
                    <h4>Related products</h4>
                    {relatedProduct.map((p, i) => (
                        <div className="mb-3" key={i}>
                            <Card product={p} />
                        </div>
                    ))}
                </div>
                </div>
              
            </div>
          
    </div>
   )

 }

export default Product