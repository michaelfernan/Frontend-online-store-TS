import { NavLink, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import BackIcon from '../Images/BackIcon';
import { CartItem } from '../types';

function CartList() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      const itemPrice = parseFloat(item.price);
      return (!Number.isNaN(itemPrice) && !Number.isNaN(item.quantity))
        ? acc + itemPrice * item.quantity
        : acc;
    }, 0);
    setCartTotal(total);
  }, [cartItems]);

  const updateLocalStorage = (updatedCart: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const increaseQuantity = (productId: string) => {
    const updatedCart = cartItems.map((item) => (item.id === productId
      ? { ...item, quantity: item.quantity + 1 } : item));
    updateLocalStorage(updatedCart);
  };

  const decreaseQuantity = (productId: string) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter((item) => item.quantity > 0);
    updateLocalStorage(updatedCart);
  };

  const removeProduct = (productId: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    updateLocalStorage(updatedCart);
  };

  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <NavLink to="/">
        <BackIcon />
      </NavLink>
      <h3>Carrinho de Compras</h3>
      {cartItems.length === 0 ? (
        <h2 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h2>
      ) : (
        cartItems.map((item) => (
          <div key={ item.id }>
            <span data-testid="shopping-cart-product-name">{item.title}</span>
            <span>
              Preço Unitário: R$
              {' '}
              {item.price}
            </span>
            <button
              data-testid="product-increase-quantity"
              onClick={ () => increaseQuantity(item.id) }
            >
              +
            </button>
            <span data-testid="shopping-cart-product-quantity">
              {item.quantity}
            </span>

            <button
              data-testid="product-decrease-quantity"
              onClick={ () => decreaseQuantity(item.id) }
            >
              -
            </button>
            <span>
              Valor Total: R$
              {' '}
              {(!Number.isNaN(parseFloat(item.price)) && !Number.isNaN(item.quantity))
                ? (parseFloat(item.price) * item.quantity).toFixed(2)
                : '0.00'}
            </span>
            <button
              data-testid="remove-product"
              onClick={ () => removeProduct(item.id) }
            >
              Remover
            </button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <div>
          <p>
            Total: R$
            {' '}
            {cartTotal.toFixed(2)}
          </p>
          <button
            data-testid="checkout-products"
            onClick={ goToCheckout }
          >
            Finalizar Compra

          </button>
        </div>
      )}
    </div>
  );
}

export default CartList;
