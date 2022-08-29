import './App.css';
import Destacado from './Destacado';
import Footer from './Footer';
import Header from './Header';
import Promos from './Promos';

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
