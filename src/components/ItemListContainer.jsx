//?CSS
import './ItemListContainer.css'

//?BOOSTRAP
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ItemListContainer = ({productsData}) => {
 
  return (
    
      <div>{
         productsData.map(results =>{
          return(
            <Card  key={results.id}style={{ width: '18rem' }}>
           <Link to={'/item/{$results.id}'}> 
           <Card.Img variant="top" src={results.image } />
           </Link>
            <Card.Body>
              <Card.Title>{results.name}</Card.Title>
              <Card.Text>
                {results.status}
              </Card.Text>
              {results.species}
            </Card.Body>
          </Card>
          )
         })
        }
      </div>
    
  )  ${results.id}
} 

export default ItemListContainer

//!colocar los estilos en un archivo CSS