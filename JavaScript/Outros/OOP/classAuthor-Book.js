/* 

/Class Autor

Três atributos privados: name (String), email (String), e birthdate (Date ou DateTime);
Um método construtor que inicialize name, email e birthdate com os valores passados;
Métodos de acesso público (getter/setter) para cada um dos atributos;

classe Book, essa classe contém:

Quatro variáveis privadas: name (String), isbn (String),  (Author, assuma que o livro só tem um único autor), price (double), e qty (int);

Métodos acessores: getName(), getISBN(), getAuthor(), getPrice(), setPrice(), getQty(), setQty()

 Por fim, escreve uma classe principal que instancie um livro (Book), e imprima o nome do autor através da instância de Book.

*/

class Author {
    constructor(name, email, birthdate) {
        this._name = name
        this._email = email
        this._birthdate = birthdate
    }

    set name(value) {
        this._name = value
    }
    get name() {
        return this._name
    }

    set email(value) {
        this._email = value
    }
    get email() {
        return this._email
    }


    set birthdate(value) {
        this._birthdate = value
    }
    get birthdate() {
        return this._birthdate
    }
}

class Book extends Author {
    constructor(name, isbn, author, price, qty) {
        super(name, author)
        this._name = name
        this._isbn = isbn
        this._author = author
        this._price = price
        this._qty = qty

    }

    getName() {
        return this._name
    }
    getISBN() {
        return this._isbn
    }
    getAuthor() {
        return this._author
    }

    getPrice() {
        return this._price
    }
    setPrice(value) {
        this._price = value
    }

    getQty() {
        return this._qty

    }
    setQty(value) {
        this._qty = value
    }
}