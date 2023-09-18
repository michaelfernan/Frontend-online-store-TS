import { useState } from 'react';
import ProductList from '../components/ProductList';
import { getProductsFromSearch } from '../services/api';

function Home() {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  const [productList, setProductList] = useState([]);

  const handleSubmit = async () => {
    setIsSearchEmpty(false);
    const searchResult = await getProductsFromSearch(searchInputValue);
    setProductList(searchResult);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchInputValue(value);
  };

  return (
    <div>
      <div>
        <form>
          {/* Etiqueta e campo de entrada */}
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
          <ProductList productList={ productList } />
        )}
      </div>
    </div>
  );
}

export default Home;
