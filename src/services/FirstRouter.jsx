import { BrowserRouter,Routes,Route } from "react-router-dom"
import {Home} from "../pages/Home"
import { Category } from "../pages/Category"
import { ItemDetailContainer } from "../pages/ItemDetailContanier"
import { CreateProduct } from "../pages/createProduct"
import { UpdateProduct } from "../pages/UpdateProduct"
import NavBar from "../components/NavBar/NavBar"
import { CartContent } from "../pages/CartContent"

const firstRouter = () => {
  return (
   <BrowserRouter>
   <NavBar />
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/category/:id" element={<Category/>}/>
   <Route path="/item/:id" element={<ItemDetailContainer/>}/>
   <Route path="/create-product" element={<CreateProduct/>}/>
   <Route path="/update-product/:id" element={<UpdateProduct/>}/>
   <Route path="/cart" element={<CartContent/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default firstRouter
