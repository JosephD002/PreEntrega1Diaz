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

export async function getProductsById(id){
  return await axios.get(`https://fakestoreapi.com/products/${id}`)
}

export async function getCategories(){
  return await axios.get('https://fakestoreapi.com/products/categories')
}

export async function getProductsByCategory(id){
  return await axios.get(`https://fakestoreapi.com/products/category/${id}  `) //! este puede ser el error
}


console.log(getProducts)
console.log(getProductsById)
console.log(getCategories)
console.log(getProductsByCategory)


fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))