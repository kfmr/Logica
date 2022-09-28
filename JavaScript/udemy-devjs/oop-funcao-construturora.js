// funcao construtora

function Produto(nome, valor) {
    this.nome = nome
    this.valor = valor
    this.temDesconto = false

    this.habilitarDesconto = function (desconto) {
        this.desconto = desconto
        this.temDesconto = true
    }

    this.precoComDesconto = function () {
        if (this.temDesconto) {
            return this.valor * (1 - this.desconto)
        } else {
            return this.valor
        }
    }

}

const produto1 = new Produto('chocolate', 10)
console.log(produto1.precoComDesconto())