import { useState } from 'react';
import ProductList from '../components/ProductList';

function Home() {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);

  const handleSubmit = () => {};

  return (
    <div>
      <div>
        <form>
          {/* Etiqueta e campo de entrada */}
          <label htmlFor="search">
            <input
              data-testid="query-input"
              type="text"
              id="search"
              name="searchTerm"
              value={ searchInputValue }
            />
          </label>

          {/* Botão de envio */}
          <button
            data-testid="query-button"
            type="submit"
            onClick={ handleSubmit }
          >
            Pesquisar

          </button>
        </form>
      </div>
      <div>
        {isSearchEmpty ? (
        /* Mensagem inicial */
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        ) : (
          <ProductList toBeQueried={ searchInputValue } />
        )}
      </div>
    </div>
  );
}

export default Home;
