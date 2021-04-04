//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (input) => {
  let reverse = ""
  

  for(let cont =  input.length -1; cont >=0 ; cont--) {
    let char = input[cont]
    reverse+=char
  }
  return reverse

};
