import { Link } from 'react-router-dom';
import { ProductCardTypes } from '../types';

export default function ProductCard({ productName,
  imageSrc, productPrice, productId }: ProductCardTypes) {
  return (
    <Link to={ `/details/${productId}` } data-testid="product-detail-link">
      <div data-testid="product">
        <span>{productName}</span>
        <img src={ imageSrc } alt="product thumbnail" />
        <span>{productPrice}</span>
      </div>
    </Link>
  );
}
