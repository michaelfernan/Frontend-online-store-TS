import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../services/api';

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
  }, []);

  const handleClick = () => {
    navigate('/cart');
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
        data-testid="shopping-cart-button"
        onClick={ handleClick }
      >
        Carrinho de compras
      </button>
    </>
  );
}
