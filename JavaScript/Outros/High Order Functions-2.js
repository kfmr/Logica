// lista de exercicios do repositório https://github.com/Maransatto/javascript-arrays

const users = [{
    name: 'Fernando S. Maransatto',
    age: 32,
    weight: 113.2,
    gender: 'male',
    city: 'Pompéia',
    state: 'SP'
}, {
    name: 'José da Silva',
    age: 40,
    weight: 77.1,
    gender: 'male',
    city: 'Brasilia',
    state: 'DF'
}, {
    name: 'Dona Maria',
    age: 39,
    weight: 70,
    gender: 'female',
    city: 'São Paulo',
    state: 'SP'
}, {
    name: 'Miguel Silva',
    age: 9,
    weight: 41.6,
    gender: 'male',
    city: 'Rio e Janeiro',
    state: 'RJ'
}, {
    name: 'Ana Paula',
    age: 32,
    weight: 69.6,
    gender: 'female',
    city: 'Bauru',
    state: 'SP'
}];
// Filter
// Pega todos os usuários com o peso acima de 75 kg.

const above75kg = (arr) => arr.filter(el => el.weight > 75)
//console.table(above75kg(users))

// Pega todos com a idade menor que 35 anos

const under35years = (arr) => arr.filter(el => el.age < 35)
//console.table(under35years(users))
// Pega todos os masculinos
const males = (arr) => arr.filter(el => el.gender.toLowerCase() === "male")
//console.table(males(users))

// Pega todos os que moram no estado de São Paulo
let usersFromSP = (arr) => arr.filter(el => el.state.toLowerCase() === "sp")
//console.table(usersFromSP(users))
// Map
// Traz um array com todos os nomes
const names = (arr) => arr.map(el => el.name)


// Traz um array com todas as idades 3. Traz um array de objeto com apenas o nome e o gênero
const nameAndGender = function (arr) {
    people = arr.map((el) => {
        return {
            name: el.name,
            gender: el.gender
        }
    })
    return people

}
//console.log(nameAndGender(users))
// Traz ums array com o primeiro nome de todos
const firstNames = (arr) => arr.map(el => el.name.split(" ")[0])

// Reduce
// Pega a soma do peso de todos
const someAllWeight = (arr) => arr.reduce((acc, current) => acc + current.weight, 0)

// Pega a soma de idade de todos
someAllAges = (arr) => arr.reduce((acc, current) => acc + current.age, 0)

// Pega o número total de caracteres no nome de todos os usuários

// Pega o número total de usuários pelo gênero

// Sort
// Ordena por nome
const sortByName = (arr) => arr.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    }
    // a must be equal to b
    return 0;
})
//console.log(sortByName(users))

// Ordena pelo peso
const sortByWeight = (arr) => arr.sort((a, b) => a.weight - b.weight)

// Ordena pela idade
const sortByAge = (arr) => arr.sort((a, b) => a.age - b.age)
// Ordena pelo gênero
const sortByGender = (arr) => arr.sort((a, b) => a.gender - b.gender)

// Every
// Todos os usuários são de SP?
usersFromSP = (arr) => arr.every(el => el.state === "SP")
//console.log(usersFromSP(users))
// Todos os usuários tem mais que 100 kg?
let above100kg = (arr) => arr.every(el => el.weight >= 100)
//console.log(above100kg(users))
// Todos os usuários tem menos de 90 anos?
let under90Years = (arr) => arr.every(el => el.age <= 90)

// todos os usuários são masculinos?
let allMan = (arr) => arr.every(el => el.gender.toLowerCase() === "male")

// Some
// Tem pelo menos um usuário de SP?
usersFromSP = (arr) => arr.some(el => el.state.toLowerCase() === "sp")
// Tem pelo menos um usuário acima de 100 kg?
above100kg = (arr) => arr.some(el => el.weight >= 100)

// Tem pelo menos um usuário com menos de 90 anos?
under90Years = (arr) => arr.some(el => el.age <= 90)
// Tem pelo menos um usuário masculino?
someMan = (arr) => arr.every(el => el.gender.toLowerCase() === "male")