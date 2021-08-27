# __init __ construtor da classe, no qual se define os atributos
# self - pertence a classe; faz referencia ao objeto em si
class Book:
    def __init__(self, name, author, pages, publisher, genre):
        self.name = name
        self.author = author
        self.pages = pages
        self.publisher = publisher
        self.genre = genre

    def ver_atributos(self):
        return (f'nome do livro: {self.name}, \nautor: {self.author},'
                f'nº de páginas: {self.pages}, \neditora: {self.publisher},'
                f'genero: {self.genre}')

# funcao vars() diz quais são os atributos do objeto

# escopo do arquivo '__main__'


if __name__ == '__main__':
    book1 = Book("Think Python", "Allen B. Downey", 236, "Novatec", "Tecnologia")
    print(book1.ver_atributos())
