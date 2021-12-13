const livros = require("./livros");
livros.forEach((_, indice) => {
  let menor = menorValor(livros, indice);

  let livroAtual = livros[indice];
  let livroMenorPreco = livros[menor];

  livros[indice] = livroMenorPreco;
  livros[menor] = livroAtual;
});

console.log(livros);

/* 
A análise assintótica serve para comparar e decidir se determinado algoritmo é o mais eficiente para resolver um problema; fatores como velocidade de processamento não são considerados nessa análise pois o que conta é o crescimento da complexidade em si (considerando o aumento na quantidade de dados processados) e não a quantidade de recursos disponíveis em si.
*/
