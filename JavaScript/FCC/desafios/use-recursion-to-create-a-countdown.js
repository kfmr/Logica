// Only change code below this line
function countdown(n){
  if(n < 1){
    return []
  }else {
    const countDown = countdown(n-1)
    countDown.unshift(n)
    return countDown
  }
}
// Only change code above this line