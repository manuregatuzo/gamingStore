import './App.css';
import Destacado from './components/Destacado';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import Titulo from './components/Titulo';

function App() {
  return (
    <div>
    <Header />
    <hr />
    <Titulo props="Bienvenidos a Gaming Store"/>
    <Destacado />
    <hr />
    <ItemListContainer />          
    <Footer />
    </div>
  );
}

export default App;
