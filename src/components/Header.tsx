import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CartIcon from '../Images/CartIcon';
import SearchIcon from '../Images/SearchIcon';

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
    <header>
      <form>
        <label htmlFor="search">
          <input
            data-testid="query-input"
            onChange={ handleChange }
            type="text"
            id="search"
            name="searchTerm"
            value={ searchInputValue }
          />
        </label>

        <button
          data-testid="query-button"
          type="submit"
          onClick={ handleSubmit }
        >
          <SearchIcon />
        </button>
      </form>
      <div>
        <h1>FRONT-END</h1>
        <h3>online store</h3>
      </div>
      <NavLink
        to="/cart"
        data-testid="shopping-cart-button"
      >
        <button type="button">
          <CartIcon />
        </button>
      </NavLink>
    </header>
  );
}
