import React, { useState } from 'react'
import Layout from '../core/Layout'
import '../css/dashboard.css'
import { isAuthenticated } from '../auth'
//import { Link } from 'react-router-dom'
import { createCategory } from './AdminApi'

const AddCategory = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    //destructure user and token from localstorage
    const { user, token } = isAuthenticated()

    const handleChange = (e) => {
        setError('')
        setName(e.target.value)
    }

    const clickSubmit = (e) => {
      e.preventDefault();
      setError('')
      setSuccess(false)

      //make request from api
      createCategory(user._id, token, {name})
      .then(data => {
        if(data.error){
            setError(data.error)
        }else{
            setError('')
            setSuccess(true)
        }
      })
    }

    const newCategoryForm = () => ( 
        // <label for="formFileMultiple" className="form-label">Multiple files input example</label>
        // <input class="form-control" type="file" id="formFileMultiple" multiple></input>
  
       <form onSubmit={clickSubmit}>
            
            <div className="form-group">
             <label htmlFor="name" className="text-muted">name</label>
             <input type="text" className="form-control" required autoFocus value={name} onChange={handleChange}/>
            </div>

            <button className="btn btn-success">add Category</button>
        </form> 
   )
       


    const showSuccess = () => {
        if(success){
            return <h3 className="text-success">{name} is created</h3>
        }
    }
    const showError = () => {
        if(error){
            return <h3 className="text-danger">{name} should be unique</h3>
        }
    }
    return(
        <Layout title="Add category" description={`G'day ${user.name}, now you can add the categories`}>
           <div className="container">
           <div className="row py-3 flex-items-sm-center">
         
             <div className="col-lg-8 col-xs-12 offset md-2 col-sm-3 py-2 clearfix">
             {showSuccess()}
             {showError()}
             {newCategoryForm()}
            
         </div>
          </div>
           </div>
        </Layout>
       )
}

export default AddCategory