import './App.css';
import Destacado from './components/Destacado';
import Footer from './components/Footer';
import Header from './components/Header';
import Promos from './components/Promos';

function App() {
  return (
    <div className='container-fluid'>
    <Header />
    <hr />
    <Destacado />
    <hr />
    <Promos />    
    <Footer />
    </div>
  );
}

export default App;
