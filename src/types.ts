export type ProductCardTypes = {
  productName: string,
  imageSrc: string,
  productPrice: string,
  productId: string,
  onAddToCart: () => void
};

export type Category = {
  id: string,
  name: string
};

export type Product = {
  id: string,
  title: string,
  thumbnail: string,
  price: number,
  quantity: number
};

export type Params = {
  query?: string,
  category?: string
};

export type CartItem = {
  id: string,
  title: string,
  price: string,
  quantity: number,
  thumbnail: string
};

export type CartTotalTypes = {
  cartItems: CartItem[];
};

export type FormDataTypes = {
  fullname: string,
  email: string,
  cpf: string,
  phone: string,
  cep: string,
  address: string,
  payment: string
  // complement: string,
  // number: string,
  // city: string,
  // state: string,
};
