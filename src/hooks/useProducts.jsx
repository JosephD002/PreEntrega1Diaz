

import { useState, useEffect } from "react";
import { getCategories,getProductsByCategory} from "../services";
import { collection, getDocs, doc, getDoc, getFirestore } from "firebase/firestore";

/**
 * @description Hook that is used to get products
 * @returns  {Array}
 */






export const useGetProducts = (collectionName="Products") => {
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
      const db = getFirestore();
      const productsCollection = collection(db, collectionName);
  
      getDocs(productsCollection).then((snapshot) => {
        setProductsData(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    }, []);
    
      return{productsData};
}


export const useGetProductById = (collectionName= "Products",id) => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const db = getFirestore();

    const docRef = doc(db, collectionName, id)

    getDoc(docRef).then((doc) => {
      setProductData({ id: doc.id, ...doc.data() })
    })

  }, [id]);

    return{productData}
}



export const useGetCategories = (collectionName = 'categories') => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName);

    getDocs(productsCollection).then((snapshot) => {
      const categories = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setCategories(
        categories[0].categories
      );
    });
  }, []);

  return { categories };
};

export const useGetProductsByCategory = (id) => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    getProductsByCategory(id)
        .then((response) => {
         setProductsData(response.data)
        })
        .catch((error) => {
          console.log(error)
        });
    } ,[id]);

    return{productsData}
}


/*export const useGetProducts = (limit) => {
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        getProducts()
           .then((response) => {
           setProductsData(response.data)
          })
          .catch((error) => {
            
          });
      } ,[limit]);

      return{productsData}
} 
export const useGetCategories = () => {
  const [categories,setCategories] = useState([]);
  useEffect(() => {
      getCategories()
        .then((response) => {
         
         setCategories(response.data)
        })
        .catch((error) => {
          console.log(error)
        });
    } ,[]);

    return{categories}
}
console.log(useGetCategories)
*/