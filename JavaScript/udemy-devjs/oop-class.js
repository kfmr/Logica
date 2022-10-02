// funcao construtora

class Produto {
    constructor(nome, valor) {
        this.nome = nome
        this.valor = valor
        this.temDesconto = false
        this.desconto = null
    }
    habilitarDesconto(desconto) {
        this.desconto = desconto
        this.temDesconto = true
    }


}

//prototype.log cria metodos que nao foram definidos na classe

Produto.prototype.log = function () {
    console.log(`Produto: ${this.nome}, Preço: ${this.valor}`)
}


const produto1 = new Produto('chocolate', 10)
produto1.log()