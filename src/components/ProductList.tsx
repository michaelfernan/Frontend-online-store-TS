import { ProductListTypes } from '../types';
import ProductCard from './ProductCard';

export default function ProductList({ productList }: ProductListTypes) {
  return (
    <div>
      <h1> Lista de Produtos</h1>
      {productList.map(({ id, title, thumbnail, price }) => {
        return (
          <ProductCard
            key={ id }
            productName={ title }
            imageSrc={ thumbnail }
            productPrice={ `R$ ${price}` }
          />
        );
      })}
    </div>
  );
}
