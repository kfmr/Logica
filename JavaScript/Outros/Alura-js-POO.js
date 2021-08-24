class Pessoa {
    constructor(nome, sobrenome,dtaNasc, cpf) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.dtaNasc = dtaNasc
    this.cpf = cpf
    }
}

class Cliente extends Pessoa {
    constructor(nome, sobrenome, dtaNasc, cpf, email, fone, servico) {
  // super - constructor superclass
        super(nome, sobrenome, dtaNasc, cpf)
        this.email = email
        this.fone = fone
        this.servico = servico
    } 
    

}