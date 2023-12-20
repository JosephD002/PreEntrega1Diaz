import { BrowserRouter,Routes,Route } from "react-router-dom"
import {Home} from "../pages/Home"
import {Category} from "../pages/category"
import { ItemDetailContainer } from "../pages/ItemDetailContanier"
import NavBar from "../components/navbar"

const firstRouter = () => {
  return (
   <BrowserRouter>
   <NavBar />
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/category/:id" element={<Category/>}/>
   <Route path="/item/:id" element={<ItemDetailContainer/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default firstRouter
