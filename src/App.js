import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element = {<ProductList />}></Route>
        <Route path="/products/:id" element = {<ProductDetails />}></Route>
        <Route path="/cart" element = {<Cart />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
