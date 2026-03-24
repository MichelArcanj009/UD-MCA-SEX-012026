let produto = {
  nome: "Notebook",
  cor: "Preto",
  preco: 3500,
  estoque: 50
};

console.log(produto.nome);
console.log(produto["preco"]);

produto.estoque = 80;

for (let chave in produto) {
  console.log(chave + ": " + produto[chave]);
}