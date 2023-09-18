export type ProductCardTypes = {
  productName: string,
  imageSrc: string,
  productPrice: string
};

export type ProductTypes = {
  id: string,
  title: string,
  thumbnail:string,
  price: number
};

export type ProductListTypes = {
  productList: ProductTypes[]
};
