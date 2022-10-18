import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/Item/ItemListContainer';
import Titulo from './components/Header/Titulo';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Context from "./components/Context/Context"
import Cart from './components/Cart/Cart';
import FormCompra from './components/Form/FormCompra';
import Nosotros from "./components/Header/Nosotros"

function App() {
  return (
    <Context>
    <div>
    <BrowserRouter>
    <Header />
    <Titulo props="Bienvenidos a Gaming Store"/>
    <Routes>
    <Route exact path="/" element={<ItemListContainer />  } />        
    <Route exact path={"item/:id"} element={<ItemDetailContainer /> } />    
    <Route exact path="/cart" element={<Cart />  } />        
    <Route exact path="/OrdenFinal" element={<FormCompra />  } />    
    <Route exact path="/Nosotros" element={<Nosotros />  } />      
    </Routes>    
    <Footer />
    </BrowserRouter>
    </div>  
    </Context>
  );
}

export default App;
