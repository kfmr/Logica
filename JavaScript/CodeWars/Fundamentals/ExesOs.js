function XO(str) {
  let o = 0
  let x = 0
    for(i of str.toLowerCase()){
      if(i == 'x'){
        x+=1
      }if(i == 'o'){
        o+=1
      }
    }
  return o == x 
}