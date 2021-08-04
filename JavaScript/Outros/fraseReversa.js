// números com uma e duas casas decimais são do tipo number 
console.log(typeof 12)

console.log(typeof 1.5)
console.log('number' == typeof 10)

// special numbers: são considerados números, mas não o são = Infinity, -Infinity e NAN(not a number)

frase = "uma frase longa";


const reverter = (frase) => {
	if(frase.length > 0) {
		let fraseReversa = "";
		for(i = frase.length; i >= 0; i--){
			fraseReversa+=frase[i]
    
    }
		return fraseReversa;
	}
	return "Insira uma frase"

    
}



console.log(reverter(frase));