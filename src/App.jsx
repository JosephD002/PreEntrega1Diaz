

//?BOOSTRAP
import "bootstrap/dist/css/bootstrap.min.css";

//?CSS
import "./App.css";


//?RUTAS
import FirstRouter from "./router/firstRouter";

//?cartProvider
import { CartProvider } from "./Context/CartContext";

const App = () => {
 


  return (
    <div className="pantalla">
      <CartProvider>
        <FirstRouter/>
      </CartProvider>
    </div>
  );
};

export default App;


