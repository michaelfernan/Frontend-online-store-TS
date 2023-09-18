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

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
