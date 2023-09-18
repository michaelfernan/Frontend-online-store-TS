import { NavLink } from 'react-router-dom';
import { BackIcon } from '../__mocks__/IconsSgv';

function CartList() {
  return (
    <div>
      <NavLink
        to="/"
      >
        <BackIcon />

      </NavLink>
      <h3>Carrinho de Compras</h3>

      <h2 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h2>

    </div>

  );
}

export default CartList;
