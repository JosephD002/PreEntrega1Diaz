import axios from "axios";


/**
 * 
 * @name getProducts
 * @description Recoge productos del api de Rick and Morty
 * @param {number } limit 
 * @returns  {Promise}
 */
export async function getProducts(limit=10){
  return await axios.get(`https://dummyjson.com/products?limit=${limit}`)
}

export async function getProductsById(id){
  return await axios.get(`https://dummyjson.com/products/${id}`)
}

export async function getCategories(){
  return await axios.get('https://dummyjson.com/products/categories')
}

export async function getProductsByCategory(id){
  return await axios.get(`https://dummyjson.com/products/category/${id}`)
}