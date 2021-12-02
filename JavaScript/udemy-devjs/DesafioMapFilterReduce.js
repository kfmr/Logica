const produtos = [{
    nome: "Impressora",
    valor: 300,
    quantidade: 2, 
    fragil: true
},
{
    nome: "caderno",
    valor: 20.0,
    quantidade: 2,
    fragil: false
},
{
    nome: "Caneta",
    valor: 6.70,
    quantidade: 7,
    fragil: true
},
{
    nome: "Monitor",
    valor: 900,
    quantidade: 5,
    fragil: true
} 
]

// produtos frageis
const frageis = produtos.filter(el => el.fragil)
console.log(frageis)
// calcular o total dos valores
const total = produtos.map(el => el.valor * el.quantidade)
console.log(total)
// calcular a media do total dos valores
const sum = (acc, value)=> (acc+value)
const somatotal = total.reduce(sum)
const media = somatotal / total.length
console.log(media)