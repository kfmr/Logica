const matriz = [[1],[2],[3]]
let produto = 1
for (lista of matriz) {
	//console.log(lista)
	for(valor of lista) {
		//console.log(valor)
		produto = produto * valor
	}
}
console.log(produto)