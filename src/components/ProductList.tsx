import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ProductCard from './ProductCard';
import { getProductsFromCategory, getProductsFromSearch } from '../services/api';

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.query) {
      const getSearchResult = async () => {
        const searchResult = await getProductsFromSearch(params.query);
        setProductList(searchResult.results);
      };

      getSearchResult();
    } else if (params.category) {
      const onCategoryFilter = async () => {
        const products = await getProductsFromCategory(params.category);
        setProductList(products.results);
      };

      onCategoryFilter();
    }
  });

  return (
    <div>
      {productList.map(({ id, title, thumbnail, price }) => {
        return (
          <ProductCard
            key={ id }
            productName={ title }
            imageSrc={ thumbnail }
            productPrice={ `R$ ${price}` }
            productId={ id }
          />
        );
      })}
    </div>
  );
}
