/*
Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.
*/

const list4 = [{
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
console.log(sameLanguage(list4));