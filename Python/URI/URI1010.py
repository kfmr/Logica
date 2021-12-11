pedido1 = input().split(" ")
pedido2 = input().split(" ")

cod1, quant1, price1 = pedido1
cod2, quant2, price2 = pedido2

total = (int(quant1) * float(price1)) + (int(quant2) * float(price2))
print(f"VALOR A PAGAR: R$ {total:.2f}")