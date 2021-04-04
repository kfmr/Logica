produto = 1.99
for item in range(1,51):
    total = item * produto
    print("Tabela de preços - produto {}: R${:.2f}".format(item,total))
