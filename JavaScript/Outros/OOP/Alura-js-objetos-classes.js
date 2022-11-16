/* Exercicios feitos durante o curso fundamentos-javascript-objetos da Alura */
function Cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
     this.depositar = function(valor){
      this.saldo += valor
    }
   }
// nova instância do objeto cliente
const pessoa1 = new Cliente("alini", "1234567", "teste@teste", 5000)
console.log(pessoa1)
console.log(pessoa1.saldo)
pessoa1.depositar(100)
console.log(pessoa1.saldo)

const pessoa2 = new Cliente("priscila", "12312312312", "priscila@email.com", 100)
pessoa2.depositar(3000)
console.log(pessoa2.saldo)

/* Criar outro objeto generico a partir do objeto Cliente */
function ClienteCartao(nome, cpf, email, valorFatura, dtaFatura) {
  Cliente.call(this,nome,cpf,email)
  this.valorFatura = valorFatura
  this.dtaFatura = dtaFatura
  this.statusPago = false
}

const pessoa3 = new ClienteCartao("ayla","12312312312", "ayla@",500, "2021-08-15" )


/* definir nova função no prototype do objeto molde */
ClienteCartao.prototype.pagarFatura = function(valor) {
  this.statusPago = true
  return this.valorFatura-= valor
}
console.log(pessoa3.pagarFatura(300))

console.log(pessoa3)

