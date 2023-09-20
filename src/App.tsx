import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CartList from './pages/CartList';
import Layout from './components/Layout';
import ProductList from './components/ProductList';

function App() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="search/:query" element={ <ProductList /> } />
        <Route path="category/:id" element={ <ProductList /> } />
      </Route>

      <Route path="/cart" element={ <CartList /> } />
    </Routes>
  );
}

export default App;
