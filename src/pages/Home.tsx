import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchIcon from '../Images/SearchIcon';
import CartIcon from '../Images/CartIcon';
import { getCategories } from '../services/api';

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

  return (
    <div>
      <div>
        <form>
          {/* Etiqueta e campo de entrada */}
          <label htmlFor="search">Digite algum termo de pesquisa:</label>
          <input type="text" id="search" name="searchTerm" />
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
        </form>
      </div>
      <div>
        {/* Mensagem inicial */}
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
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
