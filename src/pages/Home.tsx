import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getProductsFromSearch,
  getCategories, getProductsFromCategory } from '../services/api';
import { Category } from '../types';
import ProductList from '../components/ProductList';

import SearchIcon from '../Images/SearchIcon';
import CartIcon from '../Images/CartIcon';

export default function Home() {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const onCategoryFilter = async (
    id: string,
  ) => {
    const products = await getProductsFromCategory(id);
    setIsSearchEmpty(false);
    setProductList(products.results);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const searchResult = await getProductsFromSearch(searchInputValue);
    setIsSearchEmpty(false);
    setProductList(searchResult.results);
    setSearchInputValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchInputValue(value);
  };

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

  return (
    <>
      <header>
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

      <aside>
        <h2>Categorias</h2>
        {categories.map((category) => (
          <button
            key={ category.id }
            data-testid="category"
            type="button"
            id={ category.id }
            name="cat"
            onClick={ () => onCategoryFilter(category.id) }
          >
            {category.name}
          </button>
        ))}
      </aside>

      <main>
        {isSearchEmpty ? (
        /* Mensagem inicial */
          <div>
            <p>VOCÊ AINDA NÃO REALIZOU UMA BUSCA</p>
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          </div>
        ) : (
          <ProductList productList={ productList } />
        )}
      </main>
    </>
  );
}
