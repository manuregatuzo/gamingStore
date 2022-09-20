import './App.css';
import Destacado from './components/Destacado';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Titulo from './components/Titulo';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />
    <Titulo props="Bienvenidos a Gaming Store"/>
    <Routes>
    <Route exact path="/" element={<ItemListContainer />  } />        
    <Route exact path={"item/:id"} element={<ItemDetailContainer /> } />
    
    </Routes>
    
    <Footer />
    </BrowserRouter>
    </div>    
  );
}

export default App;
