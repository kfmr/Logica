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

const sum = (acc,value) => acc+value.valor
const valores2 = produtos.reduce(sum, 0)
const valores = produtos.reduce((acc,item) => acc + item.valor, 0)


console.log(valores)
console.log(valores2)
