import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import { Category } from '../types';

export default function Categories() {
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
    <aside>
      <h2>Categorias</h2>
      <ul>
        {categories.map((category) => (
          <li key={ category.id } data-testid="category">
            <Link to={ `/search?category=${category.id}` }>{category.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
