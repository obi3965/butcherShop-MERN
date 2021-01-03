import React,{ useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

/**
* @author
* @function CheckCategories
**/

const CheckCategories = ({categories, handleFilters}) => {
    const [checked,setChecked] = useState([]);



       const handleToggle = c => () => {
         const currentCategoryId = checked.indexOf(c)
         const newCheckedCategoryId = [...checked]
         if(currentCategoryId === -1){
             newCheckedCategoryId.push(c)
         }else{
             newCheckedCategoryId.splice(currentCategoryId, 1)
         }
        //  console.log(newCheckedCategoryId)
         setChecked(newCheckedCategoryId)
         handleFilters(newCheckedCategoryId)
       }
      return categories.map((c, i) =>(
        <li key={i} className="list-unstyled">
        <input
            onChange={handleToggle(c._id)}
            value={checked.indexOf(c._id === -1)}
            type="checkbox"
            className="form-check-input"
        />
        <label className="form-check-label">{c.name}</label>
    </li>
      
        //   <NavLink value={checked.indexOf(c._id === -1)} onClick={handleToggle(c._id)} key={i} to={c.name}>{c.name}</NavLink>
      
  )) 
    
   

 }

export default CheckCategories