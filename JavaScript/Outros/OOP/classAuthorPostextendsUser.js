/* Crie uma classe chamada Author que extenderá de User as informações de email e password e 
terá um atributo privado com o número de post inicializando com 0. 
Essa classe terá dos metódos, um para criar o post que incrementará a quantidade de post e 
o outro obter o número de post criados. 
Observação: Não criaremos a implementação da adição do post; */
import User from './classUserLogin.js'

class AuthorPost extends User {
    #numPosts
    constructor(name, email, password) {
        super(name, email, password)
        this.#numPosts = 0
    }
    countQuantityPosts(value) {
        typeof value === 'number' ? this.#numPosts += value : this.#numPosts
    }

    getPostsQuantity() {
        return this.#numPosts
    }
}