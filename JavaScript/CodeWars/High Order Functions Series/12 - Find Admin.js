/* 
Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
returns only the JavaScript developers who are GitHub admins:

*/

const list2 = [{
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
    return isAdm;
};

console.log(findAdmin(list2, "javaScript"));