altura = float(input("qual é a sua altura? "))
sexo = input("Qual é o seu sexo? F/M ")
if sexo == "F" or "f":
    print("o seu peso ideal seria: ", (62.1*altura) - 44.7)
elif sexo == "M" or "m":
    print("O seu peso ideal seria: ", (72.7*altura) - 58)
else:
    print("Escolha uma opção acima")
