const livros = require("./livros");

// ordenação dos livros mais baratos em uma nova lista

/*const precoslivros = [50, 45, 25, 20, 15];

//Exercicio de armazenar o indice do livro mais barato
let barato = 0;
for (let index = 0; index < precoslivros.length; index++) {
  if (precoslivros[index] < precoslivros[barato]) {
    barato = index;
  }
}
console.log(barato);
*/

let barato = 0;
for (let index = 0; index < livros.length; index++) {
  if (livros[index].preco < livros[barato].preco) {
    barato = index;
  }
}
console.log(
  `O livro mais barato é ${livros[barato].preco} e o titulo é ${livros[barato].titulo}`
);

let caro = 0;
for (let index = 0; index < livros.length; index++) {
  if (livros[index].preco > livros[caro].preco) {
    caro = index;
  }
}

console.log(
  `O livro mais caro é ${livros[caro].preco} e o titulo é ${livros[caro].titulo}`
);

function menorValor(array, index = 0) {
  let barato = index;
  for (let i = 0; i < array.length; i++) {
    if (array[index] < array[barato]) {
      barato = i;
    }
  }
  return barato;
}

module.exports = menorValor;
