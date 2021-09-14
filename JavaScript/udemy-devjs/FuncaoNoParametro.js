const sum = (num1) => {
	return function(num2) {
		return function(num3) {
			return num1 + num2 + num3
		}
	}
}

sum(10)(10)(5)

const calcular = function (num1) {
	return function(num2) {
		return function(operador){
			return operador(num1,num2)
		}
	}
	
}
const multiplicar = (num1,num2) => {
	return num1 * num2
}

calcular(10)(10)(multiplicar)