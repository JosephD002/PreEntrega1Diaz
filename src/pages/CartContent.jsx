import {useContext,useEffect,useState} from "react"
import { CartContext } from "../Context/CartContext"
import { getDoc,doc,getFirestore } from "firebase/firestore"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CartContent.css"


export const CartContent = () => {
  const [products, setProducts] = useState([]);
  const { count,setCount } = useContext(CartContext);

  const handleAdd = (id) => {
    setCount(prevCount => prevCount.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item));
  }

  const handleRemove = (id) => {
   setCount(prevCount =>{
    const updatedCount=prevCount.map(item=>item.id===id ? {...item,quantity:item.quantity-1}:item)
    return updatedCount.filter(item =>item.quantity>0)
   })
  }
  useEffect(() => {
    const db = getFirestore();
    for (let i = 0; i < count.length; i++) {
      const docRef = doc(db, "products", count[i].id);
      getDoc(docRef).then((doc) => {
        setProducts((prevState) => {
          // Filtrar los productos duplicados
          const filteredProducts = prevState.filter(
            (product) => product.id !== doc.id
          );
          // Agregar el nuevo producto al estado
          return [...filteredProducts, { id: doc.id, quantity: count[i].quantity, ...doc.data() }];
        });
      });
    }
  }, [count]);

  return count.length === 0 ? <h1 className="h1-SinProductos">No hay productos en el carrito</h1> : <div className="producto-carrito">
    {products.map((product) => (
      <Card key={product.id} className="card-Compra">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
    <Card.Text>Price:{product.price}$</Card.Text>
      </Card.Body>
      <div className="btn-compra">
        <Button  onClick={() => handleAdd(product.id)}>+</Button>
        <span>{product.quantity}</span>
        <Button onClick={()=>handleRemove(product.id)}>-</Button>
      </div>
    </Card>
  ))}
  </div>;
}


