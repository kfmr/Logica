function mixedNumbers(arr) {
  // Only change code below this line
  const newArray = []
  newArray.unshift('I', 2, 'three')
	  newArray.push(...arr)
	newArray.push(7, 'VIII', 9)
  // Only change code above this line
  return newArray;
}

console.log(mixedNumbers(['IV', 5, 'six']));