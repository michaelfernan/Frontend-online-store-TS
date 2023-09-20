import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ProductCard from './ProductCard';
import { getProductsFromSearch } from '../services/api';

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const params = useParams();

  if (params.query) {
    useEffect(() => {
      async function getSearchResult() {
        const searchResult = await getProductsFromSearch(params.query);
        setProductList(searchResult.results);
      }

      getSearchResult();
    });
  } else {
    useEffect(() => {
      async function getSearchResult() {
        const searchResult = await getProductsFromSearch(params.query);
        setProductList(searchResult.results);
      }

      getSearchResult();
    });
  }

  return (
    <div>
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
