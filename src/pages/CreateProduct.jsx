import { useState } from "react"
import { useGetCategories } from "../hooks/useProducts"
import {collection,getFirestore,addDoc} from "firebase/firestore"
import "./CreateProduct.css"
 export const CreateProduct = () => {

const [title,setTitle]= useState("")
const [description,setDescription] = useState("")
const [price,setPrice] = useState(0)
const [image,setImage] = useState("")
const [category,setCategory] = useState("")

const {categories} = useGetCategories()

const handleFieldReset = () =>{
    setTitle("")
    setDescription("")
    setPrice(0)
    setImage("")
    setCategory("")
}

const handleCreateProduct = () =>{
    const data = {
        title,
        description,
        price,
        image,
        category,
    }

  if(
    title==="" || description=== "" || price=== 0 || image=== "" 
  ) {
    return alert("Todos los campos son obligatorios")
  }

  const db=getFirestore()

  const productsCollection = collection(db,"products")
  addDoc(productsCollection, data).then(({id}) => {
    alert("Producto creado con exito!")
    handleFieldReset()
  })


}

  return (
    <div className="crear-producto">
      <h1>Crear nuevo producto</h1>
      
      <input className="formulario-crear"
        type="text"
        placeholder="Titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input className="formulario-crear"
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input className="formulario-crear"
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input className="formulario-crear"
        type="text"
        placeholder="Imagen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <select className="formulario-crear"
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((category,index)=>(
            <option key={index} value={category}>
                {category}
            </option>
        ))}
        </select>
        <button onClick={handleCreateProduct}>Crear producto</button>
    </div>
  )
}


