produto = 1.99
contador = 1
while(contador <=50):
    total = contador * produto
    contador +=1
    print("Tabela de preços - produto {}: R${:.2f}".format(contador,total))

