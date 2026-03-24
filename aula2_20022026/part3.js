let produtos = [
  { nome: "Mouse", preco: 50, estoque: 100 },
  { nome: "Teclado", preco: 120, estoque: 80 },
  { nome: "Monitor", preco: 900, estoque: 40 },
  { nome: "Notebook", preco: 3500, estoque: 20 },
  { nome: "Celular", preco: 2000, estoque: 60 },
  { nome: "Tablet", preco: 1500, estoque: 30 },
  { nome: "Fone", preco: 200, estoque: 150 },
  { nome: "Webcam", preco: 300, estoque: 70 },
  { nome: "HD", preco: 400, estoque: 90 },
  { nome: "SSD", preco: 500, estoque: 110 }
];

console.log(produtos[1].preco);
console.log(produtos[2].nome);
console.log(produtos.length);

for (let i = 0; i < produtos.length; i++) {
  console.log(produtos[i].nome);
}

let total = 0;
for (let i = 0; i < produtos.length; i++) {
  total += produtos[i].estoque;
}
console.log(total);

let maior = produtos[0];

for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].estoque > maior.estoque) {
    maior = produtos[i];
  }
}

console.log(maior);