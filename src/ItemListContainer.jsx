//?CSS
import './ItemListContainer.css'




const ItemListContainer = ({greeting}) => {
  return (
    <div className='DivItemList'>
      {greeting}
    </div>
  )
} 

export default ItemListContainer

//!colocar los estilos en un archivo CSS