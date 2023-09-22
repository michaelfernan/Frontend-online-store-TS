import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategory, getProductsFromSearch } from '../services/api';
import { Product, Params } from '../types';
import Categories from '../components/Categories';

export default function ProductList() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const params: Params = useParams();

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
  }, [params]);

  const addToCart = (product: Product) => {
    const localCart = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingProduct = localCart.find(
      (item: Product) => item.title === product.title,
    );
    let updatedCart;

    if (existingProduct) {
      updatedCart = localCart.map((item: Product) => {
        if (item.title === product.title) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    } else {
      updatedCart = [...localCart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    console.log(cart);
  };

  return (
    <div>
      {productList.map(({ id, title, thumbnail, price }) => (
        <ProductCard
          key={ id }
          productName={ title }
          imageSrc={ thumbnail }
          productPrice={ `R$ ${price.toFixed(2)}` }
          productId={ id }
          onAddToCart={ () => addToCart({
            id,
            title,
            thumbnail,
            price,
            quantity: 0,
          }) }
        />
      ))}
    </div>
  );
}
