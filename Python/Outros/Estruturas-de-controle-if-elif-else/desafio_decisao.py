nivel_acesso = input("Qual seu nível de usuário? ADM, USER ou GUEST ").upper()
if nivel_acesso == 'ADM' or nivel_acesso == 'USER':
	genero = input("Qual seu genero? F/M ").upper()
	if genero == 'F':
		if nivel_acesso == 'ADM':
			print("Olá administradora")
		else:
			print("Olá usuária")
	elif genero == 'M':
		if nivel_acesso == 'ADM':
			print("Olá administrador")
		else:
		    print("Olá usuário")
elif nivel_acesso == "GUEST":
	print("Olá visitante")
else:
	print("Olá desconhecido")

