import ItemListContainer from "../components/ItemListContainer"
import { useGetProducts } from "../hooks/useProducts"

 export const Home = () => {
  
    const  {productsData}= useGetProducts()
   
    return (<div><h1 style={{ color:'white',display:'flex',justifyContent:'center'}}>Logic</h1><ItemListContainer productsData={productsData} /></div>)
    
  
}


