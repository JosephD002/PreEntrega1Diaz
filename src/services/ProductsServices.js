import axios from "axios";


/**
 * 
 * @name getProducts
 * @description Recoge productos del api de fakestore
 * @param {number } limit 
 * @returns  {Promise}
 */

export async function getProducts(limit=10){
  return await axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
  

 
}
console.log('https://fakestoreapi.com/products')
export async function getProductsById(id){
  return await axios.get(`https://fakestoreapi.com/products/${id}`)
}

export async function getCategories(){
  return await axios.get('https://fakestoreapi.com/products/categories')
}

export async function getProductsByCategory(id){
  return await axios.get(`https://fakestoreapi.com/products/category/${id}  `) 
}

/*
console.log(getProducts)
console.log(getProductsById)
console.log(getCategories)
console.log(getProductsByCategory)
*/
