/* 
Coding Meetup #10 - Higher-Order Functions Series - Create usernames
write a function that adds the username property to each object in the input array:
The value of the username property is composed by concatenating:

firstName in lower-case;
first letter of the lastName in lower-case; and
the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.

*/
const list2 = [{
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