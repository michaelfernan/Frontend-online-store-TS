import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SearchIcon from '../Images/SearchIcon';
import styles from '../styles/Header.module.css';
import logo from '../images/logo.png';
import cart from '../images/cart.png';
import search from '../images/search.png';

export default function Header() {
  const [searchInputValue, setSearchInputValue] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async () => {
    navigate(`search/${searchInputValue}`);
    setSearchInputValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchInputValue(value);
  };

  return (
    <header className={ styles.container }>
      <form>
        <input
          data-testid="query-input"
          onChange={ handleChange }
          type="text"
          id="search"
          name="searchTerm"
          value={ searchInputValue }
          placeholder="Digite o que você busca"
        />

        <button
          data-testid="query-button"
          type="submit"
          onClick={ handleSubmit }
          className={ styles.searchButton }
        >
          <img src={ search } alt="botão de busca" />
        </button>
      </form>
      <div>
        <img src={ logo } alt="logo" />
      </div>
      <Link to="/cart" data-testid="shopping-cart-button">
        <img src={ cart } alt="carrinho" />
      </Link>
    </header>
  );
}
