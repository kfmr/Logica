const list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];

// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
const countLanguage = list1.reduce((acc, current) => {
  const language = current.language;
  if (acc[language]) {
    acc[language] = acc[language] + 1;
  } else {
    acc[language] = 1;
  }

  return acc;
}, {});

console.log(countLanguage);
// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
const rubyDev = list1.some((dev) => dev.language.toLowerCase() === "ruby");

//console.log(rubyDev);

/*Coding Meetup #2 - Higher-Order Functions Series - Greet developers
Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?

*/

const greetingPerson = list1.map((el) => {
  return (el.gretting =
    "Hi < firstName here >, what do you like the most about < language here >?");
});
//console.log(greetingPerson);

/* 
Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
returns only the JavaScript developers who are GitHub admins:

*/

const list2 = [
  {
    firstName: "Harry",
    lastName: "K.",
    country: "Brazil",
    continent: "Americas",
    age: 22,
    language: "JavaScript",
    githubAdmin: "yes",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 49,
    language: "Ruby",
    githubAdmin: "no",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 34,
    language: "JavaScript",
    githubAdmin: "yes",
  },
  {
    firstName: "Piotr",
    lastName: "B.",
    country: "Poland",
    continent: "Europe",
    age: 128,
    language: "JavaScript",
    githubAdmin: "no",
  },
];

const findAdmin = (lista, language) => {
  const isAdm = lista.filter(
    (dev) =>
      dev.githubAdmin === "yes" &&
      dev.language.toLowerCase() === language.toLowerCase()
  );
  return isAdm || [];
};

//console.log(findAdmin(list2, "javaScript"));

/* 
Find the senior
*/
const list3 = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 38,
    language: "Python",
  },
  {
    firstName: "Emilija",
    lastName: "S.",
    country: "Lithuania",
    continent: "Europe",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 49,
    language: "PHP",
  },
];

const seniorDev = (lista) => {
  let elder = lista[0].age;
  return lista.filter((dev) => (dev.age < elder ? elder : (elder = dev.age)));
};

/* Coding Meetup #11 - Higher-Order Functions Series - Find the average age */

var list4 = [
  {
    firstName: "Maria",
    lastName: "Y.",
    country: "Cyprus",
    continent: "Europe",
    age: 30,
    language: "Java",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 70,
    language: "Python",
  },
];

const mediaAge = (lista) => {
  const sumAge = lista.reduce(
    (acc, value) => acc + value.age / lista.length,
    0
  );
  return sumAge;
};

console.log(mediaAge(list4));
