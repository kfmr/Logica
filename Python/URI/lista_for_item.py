lista = [2,3,5]

lista.append(1)
lista.sort()
# se for o ultimo item da lista adiciona um ponto final, senão separa por ponto e virgula
for item in lista:
    if item == lista[-1]:
        print(str(item) + ".")
    else:
	print(str(item) + ";")