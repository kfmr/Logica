# uso de classes como tipo
from typing import Type


class Lampada:

    # variavel de contexto da classe
    light_on = False

    def acender():
        light_on = True
        return "Acendido"

    def apagar():
        light_on = False
        return "Apagado"


class assistente_virtual:

    def acender_luz(self, lampada: Type[Lampada]):
        return Lampada.acender()

    def apagar_luz(self, lampada: Type[Lampada]):
        return Lampada.apagar()


obj1 = assistente_virtual()
# deve instanciar a primeira classe para passar o objeto como tipo
luz1 = Lampada()
print(obj1.acender_luz(luz1))
print(obj1.apagar_luz(luz1))
