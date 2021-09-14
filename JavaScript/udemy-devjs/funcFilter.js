const nomes = ["Alini", "Priscila", "Luci", "Ayla", "Amanda"]

const nomeA = nomes.filter((letra) => letra[0] === "A" )
console.log(nomeA)

const produtos = [
    {
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
        nome: "Lapis",
        valor: 2.70,
        quantidade: 0
    },
    {
        nome: "Caneta",
        valor: 6.70,
        quantidade: 7
    }
]

const quantiPositivo = item => item.quantidade > 0
const itemName = item => item.nome
const prodNoEstoque = produtos
                        .filter(quantiPositivo)
                        .map(itemName)
console.log(prodNoEstoque)

