import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Titulo from './components/Titulo';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Context from "./components/Context"
import Cart from './components/Cart';
import FormCompra from './components/FormCompra';

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
    </Routes>    
    <Footer />
    </BrowserRouter>
    </div>  
    </Context>
  );
}

export default App;
