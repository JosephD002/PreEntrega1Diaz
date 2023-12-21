import { useParams } from "react-router"
import ItemListContainer from "../components/ItemListContainer"
import {  useGetProductsByCategory } from "../hooks/useProducts"

 export const Category = () => {
    const {id} = useParams()
   
    const  {productsData}= useGetProductsByCategory(id)

    return <ItemListContainer productsData={{productsData}} />
    
  
}


