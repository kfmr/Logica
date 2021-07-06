pares_acumulador = 0
for numero in range(5):
    numeros = int(input())
    if numeros % 2 == 0:
        pares_acumulador += 1
print(f"{pares_acumulador} valores pares")