import ProductCard from './ProductCard';

export default function ProductList({ results }) {
  return (
    <div>
      {results.map(({ title, thumbnail, price }) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <ProductCard
            productName={ title }
            imageSrc={ thumbnail }
            productPrice={ price }
          />
        );
      })}
    </div>
  );
}
