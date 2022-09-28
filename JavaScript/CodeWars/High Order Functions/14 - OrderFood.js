/*
Coding Meetup #14 - Higher-Order Functions Series - Order the food
Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..
your function should return the following object (the order of properties does not matter):

{ vegetarian: 2, standard: 1, vegan: 1 }

*/

const list3 = [{
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