import axios from "axios";


/**
 * 
 * @name getProducts
 * @description Recoge productos del api de Rick and Morty
 * @param {number } limit 
 * @returns  {Promise}
 */
export async function getProducts(limit=10){
  return await axios.get('https://rickandmortyapi.com/api/character')
}

console.log(getProducts)