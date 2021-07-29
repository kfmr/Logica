/* minha resolução do Desafio do curso https://www.udemy.com/course/fundamentos-de-javascript-funcional/
Fazer uma função in range que receba parametros e retone o resultado em uma lista 

*/

function rangeNums(num1,num2=0,num3=1) {
	const arr = []
	if(num1 > num2){
		for(i=num1;i>=num2;i-=num3){
			arr.push(i)
		}
	}
	else{
		for(i=num1;i<=num2;i+=num3){
			arr.push(i)
		}
	}
	return arr
	
}

console.log(rangeNums(10,1,2))