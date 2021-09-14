const numeros = [1, 3, 4, 5, 8, 90]
// i é o indice da função map
// const dobro = (num, i) => num * 2 + i
const dobro = (num) => num * 2
const dobronumeros = numeros.map(dobro)
console.log(dobronumeros)

const nomes = ["Alini", "Priscila", "Luci"]

const primeiraLetra = nomes.map((letra) => letra[0])
console.log(primeiraLetra)

const produtos = [{
        nome: "Impressora",
        valor: 300,
        quantidade: 2
    },
    {
        nome: "caderno",
        valor: 20.0,
        quantidade: 2
    },
    {
        nome: "Caneta",
        valor: 6.70,
        quantidade: 7
    }
]

const produtoNome = produtos.map((elemento) => elemento.nome)
const quanti = produtos.map((elemento) => elemento.quantidade * elemento.valor)



console.log(produtoNome)
console.log(quanti)
