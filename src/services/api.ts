const MERCADO_LIVRE_API_BASE_URL = 'https://api.mercadolibre.com';

export async function getCategories(): Promise<any[]> {
  try {
    const response = await fetch(`${MERCADO_LIVRE_API_BASE_URL}/sites/MLB/categories`);

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch categories: ${error.message}`);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId: string, query: string):
Promise<any> {
  try {
    const response = await fetch(
      `${MERCADO_LIVRE_API_BASE_URL}/sites/MLB/search?category=${categoryId}&q=${query}`,
    );
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
}

export async function getProductsFromSearch(query?:string) {
  try {
    const response = await
    fetch(`${MERCADO_LIVRE_API_BASE_URL}/sites/MLB/search?q=${query}`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
}

export async function getProductById(ProductId?:string) {
  try {
    const response = await
    fetch(`${MERCADO_LIVRE_API_BASE_URL}/items/${ProductId}`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
}

export async function getProductsFromCategory(categoryId?: string):
Promise<any> {
  try {
    const response = await fetch(
      `${MERCADO_LIVRE_API_BASE_URL}/sites/MLB/search?category=${categoryId}`,
    );
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
}
