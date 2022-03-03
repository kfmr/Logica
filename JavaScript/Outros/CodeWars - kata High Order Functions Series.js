/*
Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
Find the first python developer
< firstName here >, < country here > of the first Python developer who has signed up; or
There will be no Python developers if no Python developer has signed up.

*/
const list1 = [
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "Javascript",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 30,
    language: "Python",
  },
  {
    firstName: "Emma",
    lastName: "B.",
    country: "Norway",
    continent: "Europe",
    age: 19,
    language: "Clojure",
  },
];

const firstPyDev = (lista) => {
  const person = lista.find((el) => el.language.toLowerCase() === "python");
  return person
    ? `${person.firstName}, ${person.country}`
    : "There will be no Python developers";
};
/*
Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.
*/

const list4 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 65,
    language: "JavaScript",
  },
];

const sameLanguage = (arr) => {
  return arr.every((el) => el.language === "JavaScript");
};

//console.log(sameLanguage(list4));

/* 
Coding Meetup #10 - Higher-Order Functions Series - Create usernames
write a function that adds the username property to each object in the input array:
The value of the username property is composed by concatenating:

firstName in lower-case;
first letter of the lastName in lower-case; and
the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.

*/
const list2 = [
  {
    firstName: "Emily",
    lastName: "N.",
    country: "Ireland",
    continent: "Europe",
    age: 30,
    language: "Ruby",
  },
  {
    firstName: "Nor",
    lastName: "E.",
    country: "Malaysia",
    continent: "Asia",
    age: 20,
    language: "Clojure",
  },
];

const username = (lista, currentYear) => {
  lista.map((el) => {
    el.username = `${el.firstName.toLowerCase()}${el.lastName[0].toLowerCase()}${
      Number(currentYear) - el.age
    }`;
  });
  // map modifica a lista e retorna como novo array
  return lista;
};

//console.log(username(list2, 2020));

/*
Coding Meetup #14 - Higher-Order Functions Series - Order the food
Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..
your function should return the following object (the order of properties does not matter):

{ vegetarian: 2, standard: 1, vegan: 1 }

*/

const list3 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    meal: "vegetarian",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
    meal: "standard",
  },
  {
    firstName: "Ramona",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
    meal: "vegan",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
    meal: "vegetarian",
  },
];

const foodOption = (arr) => {
  const result = arr.reduce((acc, current) => {
    const meal = current.meal;
    acc[meal] ? acc[meal] + 1 : (acc[meal] = 1);
    return acc;
  }, {});
  return result;
};

//console.log(foodOption(list3));

/*

Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value in JavaScript, with the default value in COBOL). The value of the question property should be the following string:
Hi, could you please provide your <property name>.

and returns only the developers with missing details:

*/

const list5 = [
  {
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
  arr.forEach((el) => (el === null ? console.log(12) : console.log(2)));
  return 0;
};

console.log(addQuestion(list5));
