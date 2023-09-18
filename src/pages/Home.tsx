import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { getProductsFromSearch, getCategories } from '../services/api';

import SearchIcon from '../Images/SearchIcon';
import CartIcon from '../Images/CartIcon';

type Category = {
  id: string;
  name: string;
};

function Home() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    }

    fetchCategories();
  }, []);

  const [searchInputValue, setSearchInputValue] = useState('');
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  const [productList, setProductList] = useState([]);

  const handleSubmit = async () => {
    setIsSearchEmpty(false);
    const searchResult = await getProductsFromSearch(searchInputValue);
    setProductList(searchResult);
    console.log(searchResult);
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

              onChange={ handleChange }
              type="text"
              id="search"
              name="searchTerm"
              value={ searchInputValue }
            />
          </label>
          <ul>
            {categories.map((category) => (
              <li key={ category.id } data-testid="category">
                <Link to={ `/search?category=${category.id}` }>{category.name}</Link>
              </li>
            ))}
          </ul>

          {/* Botão de envio */}
          <button
            type="button"
          >
            <SearchIcon />
          </button>
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
          <ProductList />
        )}
      </div>
      {/* Botão/Link de carrinho de compras */}
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
