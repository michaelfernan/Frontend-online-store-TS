import { ProductCardTypes } from '../types';

export default function ProductCard({ productName,
  imageSrc, imgAltText, productPrice }: ProductCardTypes) {
  return (
    <div>
      <span>{productName}</span>
      <img src={ imageSrc } alt={ imgAltText } />
      <span>{productPrice}</span>
    </div>
  );
}
