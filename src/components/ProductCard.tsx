import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import { ProductCardTypes } from '../types';

export default function ProductCard({
  productName, imageSrc, productPrice, productId, onAddToCart,
}: ProductCardTypes) {
  return (
    <div data-testid="product">
      <Link to={ `/details/${productId}` } data-testid="product-detail-link">
        <span>{productName}</span>
        <img src={ imageSrc } alt="product thumbnail" />
        <span>{productPrice}</span>
      </Link>
      <AddToCartButton onClick={ onAddToCart } text="Adicionar ao Carrinho" />
    </div>
  );
}
