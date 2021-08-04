const umaString = "123"
umaString.padStart(8,"0")


const palavras = "janela;lampada;carro;cobertor"

palavras.split(';')


cat = {
    "name": "liv",
    "age": 4
}

const cat1 = JSON.stringify(cat)
console.log(cat1)
cat2 = JSON.parse(cat1)
console.log(cat2.name)
console.log(typeof cat1)
console.log(typeof cat2)

const onibus = {
	rodas: 8,
	limite: 40,
	portas: 2
}

for(value in onibus) {
	// imprime as propriedades
	console.log(onibus[value])
}


for (let index = 0; index < onibus.length; index++) {
	console.log(onibus[index])
	
}

const nomes = ["Priscila", "Alini", "Luiza"]

console.log(nomes.includes("Alini"))

function lenArray(arr) {
	if(arr.length < 5) {
		return "Menos de 5 elementos"
	}
	return "Mais de 5 elementos"
}

console.log(lenArray([1,3,4,5,7]))

const dog = `{
"name":"Fox"
}`


console.log(JSON.parse(dog).name)


let frase = "uma frase qualquer".split(" ")

for (let palavra of frase) {
	// itera pelo elemento
	console.log(palavra)
}
