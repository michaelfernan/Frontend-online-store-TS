import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import { Product } from '../types';

export default function DetailsProduct() {
  const [details, setDetails] = useState<any>({
    title: '',
    thumbnail: '',
    description: '',
    price: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const productDetails = async () => {
      const response = await getProductById(id);
      setDetails({
        title: response.title,
        thumbnail: response.thumbnail,
        description: response.description,
        price: response.price,
      });
    };
    productDetails();
  }, [id]);

  const handleClick = () => {
    navigate('/cart');
  };

  const addToCart = (product: Product) => {
    const localCart = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingProduct = localCart.find(
      (item: Product) => item.title === product.title,
    );
    let updatedCart;

    if (existingProduct) {
      updatedCart = localCart.map((item: Product) => {
        if (item.title === product.title) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    } else {
      updatedCart = [...localCart, { ...product, quantity: 1 }];
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <>
      <h2 data-testid="product-detail-name">{details.title}</h2>
      <img
        data-testid="product-detail-image"
        src={ details.thumbnail }
        alt={ details.title }
      />
      <p data-testid="product-detail-price">{details.price}</p>
      <p>{details.description}</p>
      <button
        data-testid="product-detail-add-to-cart"
        onClick={ () => addToCart(details) }
      >
        Adicionar ao Carrinho

      </button>

      <button
        onClick={ handleClick }
      >
        Carrinho de compras
      </button>

    </>
  );
}
