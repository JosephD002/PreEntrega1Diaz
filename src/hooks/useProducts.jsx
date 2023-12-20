import { useState, useEffect } from "react";
import { getProducts } from "../services";


/**
 * @description Hook that is used to get products
 * @returns  {Array}
 */
export const useGetProducts = () => {
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        getProducts()
          .then((response) => {
           setProductsData(response.data.results)
          })
          .catch((error) => {
            console.log(error);
          });
      } ,[]);

      return{productsData}
}