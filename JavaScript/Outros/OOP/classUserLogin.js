/*Crie uma classe chamada User com os atributos:
- nome;
- username;
- email;
- senha;
Crie os seguintes metódos com as suas regras:
- login: para logar precisa do email e senha e verificar se o email e senha estão corretos, se estiverem, retornar uma mensagem de login realizado,
senão, falha no login;
- alterar senha: possibilidade de trocar a senha atual por uma senha nova.
*/

class User {
    #senha
    constructor(name, username, email, senha) {
        this.name = name
        this.username = username
        this._email = email
        this.#senha = senha
    }
    login(email, senha) {
        if (this.email === email && this.#senha === senha) {
            return 'Login realizado coms sucesso'
        }
        return "Não autorizado. Verifique suas credencias e tente novamente"


    }
    changePassword(newPassword) {
        if (newPassword === this.#senha) {
            throw new Error('Digite outra senha')
        }
        this.#senha = newPassword
    }

}

export default User