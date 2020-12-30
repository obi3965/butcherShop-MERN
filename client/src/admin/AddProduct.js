import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout'
import '../css/dashboard.css'
import { isAuthenticated } from '../auth'
import { createProduct } from './AdminApi'
import { Link } from 'react-router-dom'


const AddProduct = () => {
 
 const [values,setValues] = useState({
    name:'',
    description:'',
    price:'',
    categories:[],
    category:'',
    shipping:'',
    quantity:'',
    photo:'',
    loading:false,
    error:'',
    createdProduct:'',
    redirectToProfile:false,
    formData:'',
});



//we destructure everything
const {
    name,
     description,
     price,
     categories,
     category,
     shipping,
     quantity,
     photo,
     loading,
     error,
     createdProduct,
     redirectToProfile,
     formData
 } = values

 useEffect(() => {
    setValues({...values, formData: new FormData()})
 }, []);
const handleChange = name => event =>{
  const value = name === 'photo' ? event.target.files[0] : event.target.value
  setValues({...values, [name]: value})
  formData.set(name, value)
}


const clickSubmit = (e) => {
e.preventDefault();
  
setValues({...values, error: '', loading: true})
createProduct(user._id, token, formData)
.then( data =>{
    if(data.error){
        setValues({...values, error: data.error})
    }else{
        setValues({
            ...values,
            name:'',
            description:'',
            quantity:'',
            photo:'',
            price:'',
            loading:false,
            createdProduct:data.name,
        })
    }
})
}

 const newPostForm = () => (
     <form onSubmit={clickSubmit}>
         <div className="form-group">
             <label htmlFor="" className="btn btn-warning" >
                 <input type="file" onChange={handleChange('photo')} name="photo" accept="image/*" />
             </label>
         </div>
         <div className="form-group">
             <label htmlFor="name" className="text-muted">name</label>
             <input type="text" className="form-control" required autoFocus value={name} onChange={handleChange('name')}/>
            </div>
            <div className="form-group">
             <label htmlFor="" className="text-muted">description</label>
             <textarea type="text" className="form-control" required autoFocus value={description} onChange={handleChange('description')}></textarea>
            </div>
            <div className="form-group">
             <label htmlFor="price" className="text-muted">price</label>
             <input type="number" className="form-control" required autoFocus value={price} onChange={handleChange('price')}/>
            </div>
            <div className="form-group">
             <label htmlFor="" className="text-muted">categories</label>
             <select type="text" className="form-control" required autoFocus onChange={handleChange('category')}>
                 <option value='kalve Kød'>we</option>
                 <option value='lamme Kød'>ff</option>
                 <option value='kylling'>gg</option>
             </select>
            </div>
            <div className="form-group">
             <label htmlFor="quantity" className="text-muted">quantity</label>
             <input type="number" className="form-control" required autoFocus value={quantity} onChange={handleChange('quantity')}/>
            </div>
            <div className="form-group">
             <label htmlFor="" className="text-muted">shipping</label>
             <select type="text" className="form-control" required autoFocus onChange={handleChange('shipping')}>
                 <option value='0'>no</option>
                 <option value='1'>yes</option>
                 
             </select>
            </div>
   <button className="btn btn-primary">send</button>
     </form>
 )



 //destructure the user and token
 const { user, token } = isAuthenticated()

    return(
        <Layout title="Add product" description={`G'day ${user.name}, now you can add the products`}>
           <div className="container">
           <div className="row py-3 flex-items-sm-center">
         
             <div className="col-lg-8 col-xs-12 offset md-2 col-sm-3 py-2 clearfix">
              {newPostForm()}
         </div>
          </div>
           </div>
        </Layout>
       )
}



export default AddProduct