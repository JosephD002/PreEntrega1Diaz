//?Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';

//?CSS
import './App.css';

//?NavBar
import NavBar from "./components/navbar";

//?ItemListContainer
import ItemListContainer from "./ItemListContainer";


const App = () => {
  return (
    <div className='pantalla'>
     <NavBar />
     <ItemListContainer greeting="Logic" />
     <ItemListContainer greeting="Proximamente..." />
    </div>
  );
}

export default App;

//!colocar los estilos en un archivo CSS