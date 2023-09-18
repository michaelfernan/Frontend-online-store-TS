import { ProductCardTypes } from '../types';

export default function ProductCard({ productName,
  imageSrc, productPrice }: ProductCardTypes) {
  return (
    <div>
      <span>{productName}</span>
      <img src={ imageSrc } alt="product thumbnail" />
      <span>{productPrice}</span>
    </div>
  );
}
