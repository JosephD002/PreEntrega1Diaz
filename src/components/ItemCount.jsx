import { useContext,useState,} from "react";
import {Button} from "react-bootstrap"
import {CartContext} from "../Context/CartContext"
import { useGetProductById } from '../hooks/useProducts';
import { useParams } from 'react-router';
import "./ItemCount.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const ItemCount = ({productId}) => {
 
  const {id} = useParams()
  const {productData} =  useGetProductById("products",id)

const [countItem,setCountItem] =useState(1)

const {count,setCount} = useContext(CartContext)

const handleAdd = () => {
    setCountItem(countItem + 1)
}

const handleRemove = () => {
    setCountItem(countItem - 1)
}

const handleAddProductToCart = () => {
    const productExists = count.find((item) => item.id === productId);

    if (productExists) {
      setCount(
        count.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + countItem }
            : item
        )
      );
    } else {
      setCount([...count, { id: productId, quantity: countItem }]);
     
    }
    toast.success('Producto añadido con exito!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    setCountItem(1);
console.log()
  };



  return (
   
<div className="ICS">
    <div className="ItemCountStyle">
       
     <Button className="boton-contador" onClick={handleRemove}>-</Button>
     <span>{countItem}</span>
     <Button className="boton-contador" onClick={handleAdd}>+</Button>
     
    </div>
    <Button className="boton-contador"onClick={handleAddProductToCart}>colocar en el carrito</Button>     
    </div>
  )
}

export default ItemCount

