
//?Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

import { CartContext } from "../../Context/CartContext"

//?CSS
import './CartWidget.css'
import { useContext } from "react"
import { Link } from "react-router-dom"

const CartWidget = () => {

  
   const {count} =useContext(CartContext)
  
   const totalQuantity = count.reduce((total, item) => total + item.quantity, 0);
   
  return (
    <Link to="/cart"> 
     <div className="Carrito">
     <FontAwesomeIcon icon={faCartShopping}/>      
     <span className="SpanCarrito">{totalQuantity}</span>
    </div>
  </Link>
   
  )
}

export default CartWidget

