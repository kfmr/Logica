function reverseString(str) {
	
	let reversedString = []
		for (let i = str.length; i >= 0; i--) {
			reversedString.push(str[i])
	
}
	return  reversedString.join('')
  
}
reverseString("hello");