class Pyladies: #criar classe
  def __init__(self, nome, quant_membros, temHomens, data_criacao, nome_membros):
    self.nome = nome  # atributo e variavel
    self.quant_membros = quant_membros
    self.temHomens = temHomens
    self.data_criacao = data_criacao
    self.nome_membros = nome_membros

  def Dar_curso(self, data_do_curso):
    self.data_do_curso = data_do_curso
    
  def Apresenta_info(self):
    

  

## instaciar objeto e classe
pyladies_l = Pyladies("pyladies_so", 3, False, "18/02/2020", ["Livia", "Helena", "Maria"])

pyladies_l.Dar_curso()

print(pyladies_l.nome, '\n', pyladies_l.quant_membros, '\n', pyladies_l.temHomens, '\n', pyladies_l.data_criacao, '\n', pyladies_l.nome_membros)

pyladies_l.


##self - pertence a classe; é o construtor
## init 
##self cria o atributo - adiciona os atributos ao proprio objeto