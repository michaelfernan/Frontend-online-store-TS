function Home() {
  return (
    <div>
      <div>
        <form>
          {/* Etiqueta e campo de entrada */}
          <label htmlFor="search">Digite algum termo de pesquisa:</label>
          <input data-testid="query-input" type="text" id="search" name="searchTerm" />

          {/* Botão de envio */}
          <button data-testid="query-button" type="submit">Pesquisar</button>
        </form>
      </div>
      <div>
        {/* Mensagem inicial */}
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    </div>
  );
}

export default Home;
