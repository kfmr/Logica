# escrever um algoritmo para ler o preço da etiqueta e calcular o valor a ser pago pelo desconto. 
#código 0 a vista 25% de desconto
#codigo 1 cheque 20% de desconto
#codigo 2 credito 2x 10%
#código 3 credito 3x 5%
# codigo 4 - outro negociar com o venderdor sem desconto

preco_produto = float(input("digite o valor do produto: "))
forma_pagamento = float(input("digite a forma de pagamento de acordo com o codigo \n 0 - pagamento a vista; \n 1 - cheque; \n 2 - cartão de credito em 2 parcelas \n 3- credito em 3 parcelas; \n 4 - outra forma de pagamento:  "))
pagamento_a_vista = 0.75
pagamento_cheque = 0.80
pagamento_credito_2 = 0.90
pagamento_credito_3 = 0.95

if forma_pagamento == 0:
  preco_final = preco_produto * pagamento_a_vista
  print("o valor com desconto foi", preco_final)
elif forma_pagamento ==1: 
    preco_final = preco_produto * pagamento_cheque
    print("o valor com desconto foi", preco_final)
elif forma_pagamento == 2:
  preco_final = preco_produto * pagamento_credito_2
  print("o valor com desconto foi", preco_final)
elif forma_pagamento == 3:
  preco_final = preco_produto * pagamento_credito_3
  print("o valor com desconto foi", preco_final)
else:
  print("Sem desconto no preço final")