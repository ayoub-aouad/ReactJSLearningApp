import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import ProductsCard from './ProductsCard';

function App() {

  return (
    <div className="App">
    <Navbar />
    <Home />
      <div className='content'>
      <h1>Order Your Product Now!</h1>
      <ProductsCard />
      </div>
    </div>
  );
}

export default App;
