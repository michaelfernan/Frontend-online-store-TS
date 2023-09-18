import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CartList from './pages/CartList';

function App() {
  return (

    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/cart" element={ <CartList /> } />
    </Routes>

  );
}

export default App;
