function contaBancaria(saldo) {
	this.saldo = saldo
	this.getSaldo = function () {
		return this.saldo
		
	}
	this.setSaldo = function(valor) {
		return this.saldo +=valor
	}
	
}

const conta1 = new contaBancaria(500)
console.log(conta1.getSaldo())
conta1.setSaldo(50)
console.log(conta1.getSaldo())