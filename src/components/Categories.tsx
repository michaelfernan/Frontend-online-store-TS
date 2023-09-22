import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../services/api';
import { Category } from '../types';
import '../styles/Categories.module.css';

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

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

  const handleClick = (categoryId: string) => {
    navigate(`category/${categoryId}`);
  };

  return (
    <aside>
      <h2>Categorias</h2>
      <hr />
      <div>

        {categories.map((category) => (
          <button
            key={ category.id }
            data-testid="category"
            onClick={ () => handleClick(category.id) }
          >
            {category.name}
          </button>
        ))}

      </div>
    </aside>
  );
}
