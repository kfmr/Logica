let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

/*'string'.match(/regex/);
/regex/.test('string');
*/

console.log(result[0])

/*ouput:
[ 'coding',
  index: 18,
  input: 'Extract the word \'coding\' from this string.',
  groups: undefined ]
*/