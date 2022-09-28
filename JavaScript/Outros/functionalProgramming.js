// first class function: funções são tratadas como variáveis
let sum = (num1, num2) => num1 + num2

sum(2, 7)

// higher order function: uma função pode ser argumento ou retornar uma função para outra
function hello(name) {
	console.log(`Hello ${name}`)
}

const run = function (hello) {
	return hello
}

run(hello("livi"))
// passar uma função como parametro para outra

// currying - ocorre quando uma funcao anonima
function taxPrice(tax) {
	return function (price) {
		return price * (1 + tax)

	}
}

const taxBr = taxPrice(0.35)

console.log(taxBr(parseInt(25.50)))
//map
const fruitList = [{
		name: "avocado",
		price: 9.90
	},
	{
		name: "strawberry",
		price: 12.90
	},
	{
		name: "kiwi",
		price: 8.90
	}
]

const price = fruitList.map((elemento) => elemento.price)

console.log(price)

//filter
const expansiveFruit = fruitList.filter((element) => element.price > 9)

console.log(expansiveFruit)
// reduce
const nums = [2, 5, 6, 8, 30]

nums2 = [20, 20]
sum = (acumulador, value) => acumulador + value;

const total = nums.reduce(sum)
const media = total / nums.length
console.log(total)