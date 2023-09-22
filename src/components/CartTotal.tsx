import { useEffect, useState } from 'react';
import { CartTotalTypes } from '../types';

export default function CartTotal({ cartItems }: CartTotalTypes) {
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      const itemPrice = parseFloat(item.price);
      return (!Number.isNaN(itemPrice) && !Number.isNaN(item.quantity))
        ? acc + itemPrice * item.quantity
        : acc;
    }, 0);
    setCartTotal(total);
  }, [cartItems]);

  return (
    <span>
      Total: R$
      {' '}
      {cartTotal.toFixed(2)}
    </span>
  );
}
