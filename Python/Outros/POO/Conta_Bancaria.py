class Conta_Bancaria:
    def __init__(self,numero,agencia,titular,saldo):
        # todos os atributos são public
        #privar atributos com __variavel
        self.__numero = numero
        self.agencia = agencia
        self.__titular = titular
        self.__saldo = saldo



    def set_numero(self,num):
        self.__numero = num



    def get_numero(self):
        return self.__numero

    
    def set_titular(self,nome):
        self.__titular = nome

    
    def get_titular(self):
        return self.__titular


    @property
    def saldo(self):
        return self.__saldo



    def deposito(self, valor):
        self.__saldo += valor

    
    def sacar(self,valor):
        if self.__saldo < valor:
            return "saldo insuficiente"
        else:
            self.__saldo-=valor
            return self.__saldo
        


print(__name__)

if __name__ == '__main__':
    conta_poupanca1 = Conta_Bancaria(789, 89, "Ayla D.", 100)
    print(conta_poupanca1)
    conta_poupanca1.deposito(500)
    # o método não precisa ser chamado, apenas passado como referencia
    print(conta_poupanca1.saldo)
    print(conta_poupanca1.get_titular())
    print(conta_poupanca1.sacar(300))
