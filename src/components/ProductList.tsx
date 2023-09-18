import { ProductListTypes } from '../types';
import ProductCard from './ProductCard';

export default function ProductList({ productList }: ProductListTypes) {
  return (
    <div>
      <h1> Lista de Produtos</h1>
      {productList.map(({ title, thumbnail, price }) => {
        return (
          <ProductCard
            productName={ title }
            imageSrc={ thumbnail }
            productPrice={ `R$ ${price}` }
          />
        );
      })}
    </div>
  );
}
