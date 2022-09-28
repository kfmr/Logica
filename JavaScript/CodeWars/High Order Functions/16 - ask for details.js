/*

Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value in JavaScript, with the default value in COBOL). The value of the question property should be the following string:
Hi, could you please provide your <property name>.

and returns only the developers with missing details:

*/

const list5 = [{
    firstName: null,
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: null,
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

const addQuestion = (arr) => {
  const result = arr.reduce((acc, current) => {
    const attrNull = Object.values(current)
    attrNull === null ? true : false
    return attrNull
  }, {})
  return result
};

console.log(addQuestion(list5));