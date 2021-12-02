const cartoons = ["caverna do dragão", "hey arnold", "rugrats", "pepper ann"]

cartoons.forEach(cartoon => console.log(cartoon))

const notas = [10, 8, 7, 9]

const notas1 = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notas1)

const cats = ["amora", "mel", "leozinho", "sofia"]
const catAges = [4,5,2,3]

const novinhos = cats.filter((cat,indice) => {
    return catAges[indice] <=2
})

console.log(`${novinhos}`)

const capitalize = cats.map(nome => nome[0].toUpperCase() + nome.slice(1).toLowerCase())
console.log(capitalize)

// const novinhos = cats.filter((_, indice) => catAges[indice] <= 2)

// console.log(`bebê gato: ${novinhos}`)