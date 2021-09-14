// implementar como o map funciona por baixo dos panos
const nomes = ["Alini", "Priscila", "Luci"]
const primeiraLetra = []
for(nome of nomes){
    primeiraLetra.push(nome[0])
}
console.log(primeiraLetra)
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
        nome: "Caneta",
        valor: 6.70,
        quantidade: 7
    }
]

// mostrado em aula funcaoMap04
Array.prototype.myMap = function(func) {
    const newArray = []
    for(i=0;this.length;i++){
        const result = func(this[i],i, this)
        newArray.push(result)
    }
    return newArray
}

