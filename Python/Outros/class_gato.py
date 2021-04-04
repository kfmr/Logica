class Gato:
  def __init__(self, nome_c, peso_c, altura_c, raca_c):
    self.nome = nome_c
    self.peso = peso_c
    self.altura = altura_c
    self.raca = raca_c

  def Anda(self):
    print("o gato está andando")
  

  def Come(self):
    print("o gato come muito")

  def Infos(self):
    print((self.nome), (self.peso), (self.altura), (self.raca))

  def Mia(self):
    print("miau")



gata = Gato("Lua", "5.5 kg", "23 cm", "vira-lata")

gata.Anda()
gata.Come()
gata.Infos()
gata.Mia()