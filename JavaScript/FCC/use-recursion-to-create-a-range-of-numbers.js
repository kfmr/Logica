function rangeOfNumbers(startNum, endNum) {
	if(startNum -  endNum === 0){
		return [startNum]
	}else {
		const range = rangeOfNumbers(startNum, endNum - 1)
		range.push(endNum)
		return range
	}
	
};