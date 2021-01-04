import { API } from '../config'
import Axios from 'axios'

export const getProducts = sortBy => {
    return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
        method: "GET"
    }).then(response => {
    return response.json()
    }).catch( error =>{
        console.log(error)
    })
}


export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    }).then( response => {
        return response.json()
    }).catch( err =>{
        console.log(err)
    })
}


export const getFilteredProducts = (skip, limit, filters = {}) => {
  const data = {
      limit,
      skip,
      filters
  };
  return fetch(`${API}/products/bySearch`, {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
  })
      .then(response => {
          return response.json();
      })
      .catch(err => {
          console.log(err);
      });
};