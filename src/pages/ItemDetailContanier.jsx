import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useGetProductById } from '../hooks/useProducts';
import { useParams } from 'react-router';

 export const ItemDetailContainer = () => {

   const {id} = useParams()

   const {productData} =  useGetProductById(id)
    
    return (
        <Card  key={productData.id}style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productData.thumbnail} />
         <Card.Body>
           <Card.Title>{productData.title}</Card.Title>
           <Card.Text>
             {productData.description}
           </Card.Text>
           {productData.price}
         </Card.Body>
       </Card>
    )
    
  
}

//? Lo tengo por si quiero mostrar las imagenes de otra api que llegue a usar
/* {
            productData.images ? productData.images.map(image => <Card.Img variant="top" src={image} />) : null
           }*/