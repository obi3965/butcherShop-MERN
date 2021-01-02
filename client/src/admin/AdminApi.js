import { API } from "../config";

//for the create category in admin dashboard
 export const createCategory = (userId,token, category ) => {
   
    return fetch(`${API}/category/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(category),
    })
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        console.log(error);
      });
  };


  //create products in admin dashboard
  export const createProduct = (userId,token, product ) => {
   
    return fetch(`${API}/product/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: product
    })
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        console.log(error);
      });
  };


  export const getCategories = () => {
      return fetch(`${API}/categories`, {
          method: "GET"
      }).then( response => {
          return response.json()
      }).catch( err =>{
          console.log(err)
      })
  }