//?CSS
import './ItemListContainer.css'

//?BOOSTRAP
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ItemListContainer = ({productsData}) => {
 
  return (
    
      <div >{
         productsData.map((products) =>{
          return(
            <Card  key={products.id} style={{ width: '18rem' }}>
           <Link to={`/item/${products.id}`}> 
           <Card.Img variant="top" src={products.image} />
           </Link>
            <Card.Body>
              <Card.Title>{products.title}</Card.Title>
              <Card.Text>
                {products.description}
              </Card.Text>
              {products.price}
            </Card.Body>
          </Card>
          )
         })
        }
      </div>
    
  ) 
} 

export default ItemListContainer

