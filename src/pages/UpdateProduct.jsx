import { useParams } from "react-router-dom"
import { useGetProductById } from "../hooks/useProducts"
import { useState , useEffect} from "react"
import { doc, getFirestore, updateDoc } from "firebase/firestore"
import "./updateProduct.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const UpdateProduct = () => {
    const { id } = useParams()

    const { productData } = useGetProductById("products", id)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {

      setTitle(productData.title)
      setDescription(productData.description)
      setPrice(productData.price)
      setImage(productData.image)
      setCategory(productData.category)

    }, [productData])

    const handleUpdateProduct = () => {
      const data = {
        title,
        description,
        price,
        image,
        category,
      };
      
      const db = getFirestore();
      const productsCollection = doc(db, "products", id)
      
      updateDoc(productsCollection, data).then(() => {
        toast.success('Producto actualizado exitosamente!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      });
    }

  return (
    <div className="actualizar-producto">
      <h1>Cambios en el Producto</h1>
      <input className="formulario-actualizar"
        type="text"
        placeholder="Titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input className="formulario-actualizar"
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input className="formulario-actualizar"
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input className="formulario-actualizar"
        type="text"
        placeholder="Imagen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      {/* <select
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select> */}
      <button onClick={handleUpdateProduct}>Actualizar producto</button>
      <ToastContainer />  
    </div>
  )
}