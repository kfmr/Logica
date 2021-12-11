function findElement(arr, func) {
  let num = 0
  for(num of arr) {
    if(func(num)) {
      return num
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);