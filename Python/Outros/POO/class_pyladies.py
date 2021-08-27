class Pyladies: #criar classe
    def __init__(self, nome, quant_membros, temHomens, data_criacao, nome_membros):
        self.nome = nome  # atributo e variavel
        self.quant_membros = quant_membros
        self.temHomens = temHomens
        self.data_criacao = data_criacao
        self.nome_membros = nome_membros


# instaciar objeto e classe


pyladies_l = Pyladies("pyladies_so", 3, False, "18/02/2020", ["Livia", "Helena", "Maria"])

print(pyladies_l.nome, '\n', pyladies_l.quant_membros, '\n', pyladies_l.temHomens, '\n', pyladies_l.data_criacao, '\n', pyladies_l.nome_membros)

print(vars(pyladies_l))

##self - pertence a classe; faz referencia ao objeto em si
## __init __ construtor da classe
##self cria o atributo - adiciona os atributos ao proprio objeto