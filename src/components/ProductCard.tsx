import { ProductCardTypes } from '../types';

export default function ProductCard({ productName,
  imageSrc, productPrice }: ProductCardTypes) {
  return (
    <div data-testid="product">
      <span>{productName}</span>
      <img src={ imageSrc } alt="product thumbnail" />
      <span>{productPrice}</span>
    </div>
  );
}
