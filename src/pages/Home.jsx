import ItemListContainer from "../components/ItemListContainer"
import { useGetProducts } from "../hooks/useProducts"
import "./Home.css"
 export const Home = () => {
  
    const  {productsData}= useGetProducts('products')
   
    return (<div className="Home"><h1>Todos los productos</h1><ItemListContainer productsData={productsData} /></div>)
    
  
}


