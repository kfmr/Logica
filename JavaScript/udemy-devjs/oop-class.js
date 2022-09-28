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

const produto1 = new Produto('chocolate', 10)