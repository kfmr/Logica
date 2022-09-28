/* Coding Meetup #11 - Higher-Order Functions Series - Find the average age */

var list4 = [{
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