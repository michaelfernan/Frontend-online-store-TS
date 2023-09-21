import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../types';
import { BrStates } from '../services/BRstates';

export default function Checkout() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [fullnameIpt, setFullnameIpt] = useState<string>('');
  const [cpfIpt, setCpfIpt] = useState<string>('');
  const [emailIpt, setEmailIpt] = useState<string>('');
  const [phoneIpt, setPhoneIpt] = useState<string>('');
  const [cepIpt, setCepIpt] = useState<string>('');
  const [addressIpt, setAddressIpt] = useState<string>('');
  const [complementIpt, setComplementIpt] = useState<string>('');
  const [numberIpt, setNumberIpt] = useState<string>('');
  const [cityIpt, setCityIpt] = useState<string>('');

  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
  }, []);

  const total = '100';

  const handleClick = () => {
    navigate('/');
    localStorage.clear();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    if (id === 'fullname') {
      setFullnameIpt(value);
    }
    if (id === 'email') {
      setEmailIpt(value);
    }
    if (id === 'cpf') {
      setCpfIpt(value);
    }
    if (id === 'cep') {
      setCepIpt(value);
    }
    if (id === 'phone') {
      setPhoneIpt(value);
    }
    if (id === 'address') {
      setAddressIpt(value);
    }
    if (id === 'complement') {
      setComplementIpt(value);
    }
    if (id === 'number') {
      setNumberIpt(value);
    }
    if (id === 'city') {
      setCityIpt(value);
    }
  };

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
          value={ fullnameIpt }
        />
        <input
          type="text"
          placeholder="CPF"
          data-testid="checkout-cpf"
          onChange={ handleChange }
          is="cpf"
          value={ cpfIpt }
        />
        <input
          type="email"
          placeholder="Email"
          data-testid="checkout-email"
          onChange={ handleChange }
          id="email"
          value={ emailIpt }
        />
        <input
          type="text"
          placeholder="Telefone"
          data-testid="checkout-phone"
          onChange={ handleChange }
        />
        <input
          type="text"
          placeholder="CEP"
          data-testid="checkout-cep"
          onChange={ handleChange }
        />
        <input
          type="text"
          placeholder="Endereço"
          data-testid="checkout-address"
          onChange={ handleChange }
        />
        <input type="text" placeholder="Complemento" onChange={ handleChange } />
        <input type="text" placeholder="Número" onChange={ handleChange } />
        <input type="text" placeholder="Cidade" onChange={ handleChange } />

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
