positivo = 0
negativo = 0
par = 0
impar = 0
for numero in range(5):
    numeros = int(input())
    if numeros > 0:
        positivo+=1
    if numeros < 0:
        negativo+=1
    if numeros % 2 ==0:
        par+=1
    if numeros % 2 ==1:
        impar+=1
        
print(f"{par} valor(es) par(es)")
print(f"{impar} valor(es) impar(es)")
print(f"{positivo} valor(es) positivo(s)")
print(f"{negativo} valor(es) negativo(s)")