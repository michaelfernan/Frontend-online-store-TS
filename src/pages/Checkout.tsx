import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem, FormDataTypes } from '../types';
import { BrStates } from '../services/BRstates';

export default function Checkout() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [formData, setFormData] = useState<FormDataTypes>({
    fullname: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '',
    complement: '',
    number: '',
    city: '',
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
  }, []);

  const total = '100';

  const handleClick = () => {
    navigate('/');
    localStorage.clear();
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  }

  return (
    <>
      <div>
        <h2>Revise seus Produtos</h2>
        {cartItems.map(({ title, price, quantity, thumbnail, id }) => {
          return (
            <div key={ id }>
              <span>{title}</span>
              <span>{`R$ ${price},00`}</span>
              <img src={ thumbnail } alt="imagem do produto" />
              <span>{`Quantidade: ${quantity}`}</span>
            </div>
          );
        })}
        <span>{`Total R$ ${total},00`}</span>
      </div>
      <div>
        <h2>Informações do Comprador</h2>

        <input
          type="text"
          placeholder="Nome Completo"
          data-testid="checkout-fullname"
          onChange={ handleChange }
          id="fullname"
          value={ formData.fullname }
        />
        <input
          type="text"
          placeholder="CPF"
          data-testid="checkout-cpf"
          onChange={ handleChange }
          is="cpf"
          value={ formData.cpf }
        />
        <input
          type="email"
          placeholder="Email"
          data-testid="checkout-email"
          onChange={ handleChange }
          id="email"
          value={ formData.email }
        />
        <input
          type="text"
          placeholder="Telefone"
          data-testid="checkout-phone"
          onChange={ handleChange }
          id="phone"
          value={ formData.phone }
        />
        <input
          type="text"
          placeholder="CEP"
          data-testid="checkout-cep"
          onChange={ handleChange }
          id="cep"
          value={ formData.cep }
        />
        <input
          type="text"
          placeholder="Endereço"
          data-testid="checkout-address"
          onChange={ handleChange }
          id="address"
          value={ formData.address }
        />
        <input
          type="text"
          placeholder="Complemento"
          onChange={ handleChange }
          id="complement"
          value={ formData.complement }
        />
        <input
          type="text"
          placeholder="Número"
          onChange={ handleChange }
          id="number"
          value={ formData.number }
        />
        <input
          type="text"
          placeholder="Cidade"
          onChange={ handleChange }
          id="city"
          value={ formData.city }
        />

        <select>
          <option value="Estado">Estado</option>
          {BrStates.map((state) => {
            return (
              <option value={ state } key={ state }>{state}</option>
            );
          })}
        </select>
      </div>
      <div>
        <h2>Método de Pagamento</h2>
        <label data-testid="ticket-payment" htmlFor="ticket">
          Boleto
          <input type="radio" id="ticket" name="payment" />
        </label>
        <label data-testid="visa-payment" htmlFor="visa">
          Visa
          <input type="radio" id="visa" name="payment" />
        </label>
        <label data-testid="master-payment" htmlFor="mastercard">
          MasterCard
          <input type="radio" id="mastercard" name="payment" />
        </label>
        <label data-testid="elo-payment" htmlFor="elo">
          Elo
          <input type="radio" id="elo" name="payment" />
        </label>
      </div>
      <button data-testid="checkout-btn" onClick={ handleClick }>Comprar</button>
      <span data-testid="error-msg">Campos Inválidos</span>
    </>
  );
}
