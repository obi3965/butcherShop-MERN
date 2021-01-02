import React,{ useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

/**
* @author
* @function CheckCategories
**/

const CheckCategories = ({categories}) => {
    const [checked,setChecked] = useState([]);



       const handleToggle = c => () => {
         const currentCategoryId = checked.indexOf(c)
         const newCheckedCategoryId = [...checked]
         if(currentCategoryId === -1){
             newCheckedCategoryId.push(c)
         }else{
             newCheckedCategoryId.splice(currentCategoryId, 1)
         }
         console.log(newCheckedCategoryId)
         setChecked(newCheckedCategoryId)
       }
      return categories.map((c, i) =>(
      
          <NavLink value={checked.indexOf(c._id === -1)} onClick={handleToggle(c._id)} key={i} to={c.name}>{c.name}</NavLink>
      
  )) 
    
   

 }

export default CheckCategories