
def escrever_arquivo(file,witring):
	with open(file, 'a') as arquivo: # abre o arquivo para leitura/append
		escrever_arquivo = arquivo.write(witring)


def ler_arquivo(file):
	with open(file, 'r') as arquivo:
		ler_arqv= arquivo.read() # variavel com o método de leitura
		print(ler_arqv) #printa  conteúdo do arquivo
	# fecha o arquivo
		arquivo.close()


escrever_arquivo('arquivo.txt',"Sem ideia\n")
ler_arquivo('arquivo.txt')