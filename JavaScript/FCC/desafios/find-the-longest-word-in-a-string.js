function findLongestWordLength(str) {
  const strToArray = str.split(" ")
  let longest = strToArray[0].length
  for (let word of strToArray) {
    if(word.length > longest) {
      longest = word.length
    }
    
  } 
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");