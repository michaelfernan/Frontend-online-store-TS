import { NavLink } from 'react-router-dom';
import SearchIcon from '../Images/SearchIcon';
import CartIcon from '../Images/CartIcon';

function Home() {
  return (
    <div>
      <div>
        <form>
          {/* Etiqueta e campo de entrada */}
          <label htmlFor="search">Digite algum termo de pesquisa:</label>
          <input type="text" id="search" name="searchTerm" />

          {/* Botão de envio */}
          <button
            type="button"
          >
            <SearchIcon />
          </button>
        </form>
      </div>
      <div>
        {/* Mensagem inicial */}
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
      <NavLink
        to="/cart"
        data-testid="shopping-cart-button"
      >
        <button type="button">
          <CartIcon />
        </button>
      </NavLink>

    </div>
  );
}

export default Home;
