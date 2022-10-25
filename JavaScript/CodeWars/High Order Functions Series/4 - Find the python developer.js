/*
Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
Find the first python developer
< firstName here >, < country here > of the first Python developer who has signed up; or
There will be no Python developers if no Python developer has signed up.

*/
const list1 = [{
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
    return person ?
        `${person.firstName}, ${person.country}` :
        "There will be no Python developers";
};