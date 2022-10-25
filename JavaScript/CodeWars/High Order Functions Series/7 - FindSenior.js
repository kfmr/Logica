/* 
Find the senior
*/
const list3 = [{
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
    age: 128,
    language: "PHP",
  },
];

const seniorDev = (lista) => {
  let elder = lista[0].age
  let seniorName = lista[0].firstName
  lista.filter(dev => {
    if (dev.age > elder) {
      elder = dev.age
      seniorName = dev.firstName
    }
  })
  return {
    name: seniorName,
    age: elder
  }
};

console.log(seniorDev(list3))

const findOlderDevAge = (lista) => {
  let elder = lista[0].age
  return lista.filter((dev) => (dev.age < elder ? elder : (elder = dev.age)))
};
// console.log(findOlderDevAge(list3))