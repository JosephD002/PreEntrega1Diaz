
//?Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

//?CSS
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className="Carrito">
      <FontAwesomeIcon icon={faCartShopping}/>      
      <span className="SpanCarrito">1</span>
    </div>
  )
}

export default CartWidget

//!colocar los estilos en un archivo CSS