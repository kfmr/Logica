# lista são mutáveis
lista_nomes = ["Alini", "Priscila", "Luciana"]

lista_notas = [9, 7, 8.5]

# ultimo elemento da lista
lista_nomes[-1]

# adicionar item num array .append()
lista_nomes.append("Ayla")
print(lista_nomes)

# remove um item da lista pop() de acordo com o index passado no parametro
# removeu o primeiro item: list.pop(index)

lista_notas.pop(0)
print(lista_notas)

# tuplas são imutáveis
tupla_nomes = ("Alini", "Priscila", "Luciana")

# verifica se o elemento está na lista ou tupla
print("Alini" in tupla_nomes)

for item in tupla_nomes:
    print(item)

# método type verifica o tipo de dado
print(type(tupla_nomes) == tuple)
print(type(lista_nomes) == list)

# colocar uma virgula para ser lida como tuple
num = (14,)
print(type(num))
# cada objeto tem um id que refere-se ao seu endereço de memória
print(id(num))

# intervalos
# range(ponto de inicio, ponto de parada -1, intervalo)
for i in range(10, 0, -1):
    print(i)

pares_reverso = list(range(10, 0, -2))
print(pares_reverso)
