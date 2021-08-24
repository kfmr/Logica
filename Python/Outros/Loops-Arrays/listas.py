num = int(input("Digite quantos numeros você ira ter na lista: "))
num2 = input(f"Digite a quantidade {num} de numeros inteiros: ").split()

lista = [1] * num

for i in range(0, num):
	lista[i] = int(num2[i])
	print(lista[i])


num = int(input("Digite quantos numeros você ira ter na lista: "))
num2 = input(f"Digite a quantidade {num} de numeros inteiros: ").split()

lista = [None] * num

for i in range(0, num):
	lista[i] = int(num2[i])
	print(lista[i])