/* *Coding Meetup #2 - Higher-Order Functions Series - Greet developers
Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?

*/

const list1 = [{
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


const greetingPerson = list1.map((el) => {
    el.gretting = `Hi ${el.firstName}, what do you like the most about ${el.language}?`
    return el
});
console.log(greetingPerson);