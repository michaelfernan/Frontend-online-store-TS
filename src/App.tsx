import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CartList from './pages/CartList';
import Layout from './components/Layout';
import ProductList from './pages/ProductList';
import DetailsProduct from './pages/DetailsProduct';
import Checkout from './pages/Checkout';
import Layout2 from './components/Layout2';

function App() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="search/:query" element={ <ProductList /> } />
        <Route path="category/:category" element={ <ProductList /> } />
      </Route>
      <Route element={ <Layout2 /> }>
        <Route path="/details/:id" element={ <DetailsProduct /> } />
        <Route path="/cart" element={ <CartList /> } />
        <Route path="/checkout" element={ <Checkout /> } />
      </Route>
    </Routes>
  );
}

export default App;
