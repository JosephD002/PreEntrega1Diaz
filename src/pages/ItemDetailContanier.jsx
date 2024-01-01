//?CSS
import './itemDetailContainer.css'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useGetProductById } from '../hooks/useProducts';
import { useParams } from 'react-router';

 export const ItemDetailContainer = () => {

   const {id} = useParams()

   const {productData} =  useGetProductById(id)
    
    return (
      
      <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
        <h1 style={{ color:'white',display:'flex',justifyContent:'center'}}>Detalles del producto</h1>
        <Card className='productoDetallado' key={productData.id}>
        <Card.Img variant="top" src={productData.image} />
         <Card.Body>
           <Card.Title>{productData.title}</Card.Title>
           <Card.Text>
             {productData.description}
           </Card.Text>
           {productData.price}
         </Card.Body>
       </Card>
       </div>
    )
    
  
}

//? Lo tengo por si quiero mostrar las imagenes de otra api que llegue a usar
/* {
            productData.images ? productData.images.map(image => <Card.Img variant="top" src={image} />) : null
           }*/