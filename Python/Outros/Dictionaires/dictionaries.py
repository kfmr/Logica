# dicionários

notas = {
    "Alini": 7.0,
    "Priscila": 9.0,
    "Luciana": 8.75
}


# atribuição de nova chave no dict existente
notas["Ayla"] = 7.75

# ou dict.update({chave:valor}) para adicionar a chave
notas.update({"Lua": 8.5})
print(notas)

# loops em dicionários
fruits = {
    "Avocado": 13.90,
    "Strawberry": 5,
    "Kiwi": 12.75
}
# percorrer os valores na chave
for key in fruits:
    print(fruits[key])

# percorre unpacking e com a função dict.items()
for nome, nota in notas.items():
    print(nota)
