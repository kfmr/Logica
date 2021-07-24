function typeOfInput(value) {
	let valueType = typeof value;
	if(valueType === 'boolean') {
		return `${value} é booleano`
	}
	else if (valueType === 'string'){
		return `${value} é uma string`
	}
	else if(valueType === 'number'){
		return `${value} é uma numero`
	}
	//return;
}

