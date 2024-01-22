//?CSS
import './itemDetailContainer.css'


import Card from 'react-bootstrap/Card';
import { useGetProductById } from '../hooks/useProducts';
import { useParams } from 'react-router';
import ItemCount from '../components/ItemCount';
import { Link } from 'react-router-dom';
 export const ItemDetailContainer = () => {

   const {id} = useParams()

   const {productData} =  useGetProductById("products",id)
    
    return (
      
      <div className='div-itemDetailContainer'>
        <h1 className='titulo-itemDetailContainer'>Detalles del producto</h1>
        <Card className='productoDetallado' key={productData.id}>
        <Card.Img variant="top" src={productData.image} />
         <Card.Body>
           <Card.Title>{productData.title}</Card.Title>
           <Card.Text>
             {productData.description}
           </Card.Text>
           price:{productData.price}$
           <ItemCount productId={productData.id} />
           <Link to={`/update-product/${productData.id}`} ><p  className="link-editar">Editar producto</p></Link>
         </Card.Body>
       </Card>
       </div>
    )
    
  
}

//? Lo tengo por si quiero mostrar las imagenes de otra api que llegue a usar
/* 
 <ItemCount productId={productData.id}/>
{
            productData.images ? productData.images.map(image => <Card.Img variant="top" src={image} />) : null
           }*/