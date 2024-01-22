import ItemListContainer from "../components/ItemListContainer"
import { useGetProducts } from "../hooks/useProducts"
import "./Home.css"
 export const Home = () => {
  
    const  {productsData}= useGetProducts('products')
   
    return (<div className="Home"><h1>Encuentra todo lo que necesitas en Logic</h1><ItemListContainer productsData={productsData} /></div>)
    
  
}


