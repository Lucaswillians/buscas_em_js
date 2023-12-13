function calcularTotalDeLivrosDisponiveis (livros)
{
  return livros.reduce((accumulator, livro) => accumulator + livro.preco, 0).toFixed(2)
}