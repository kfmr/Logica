const characters = [{
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const allNames = characters.map(el => el.name)


//2. Get array of all heights
const allHeights = characters.map(el => el.height)


//3. Get array of objects with just name and height properties
const nameWithHeight = characters.map((el) => {
    return {
        name: el.name,
        height: el.height
    }
})

//4. Get array of all first names
const firstNames = characters.map(el => el.name.split(' ')[0])



//***REDUCE***
const sum = (acc, value) => acc + value
//1. Get total mass of all characters
const mass = characters.reduce((acc, value) => acc + value.mass, 0)

//2. Get total height of all characters
const heights = characters.reduce((acc, value) => acc + value.height, 0)

//3. Get total number of characters by eye color
const byEyeColor = characters.reduce((acc, value) => {
    const eyeColor = value.eye_color
    acc[eyeColor] ? acc[eyeColor]++ : acc[eyeColor] = 1
    return acc
}, {})


//4. Get total number of characters in all the character names
const byCharName = characters.reduce((acc, value) => {
    return acc + value.name.length
}, 0)
console.log(byCharName)

const nameLength = characters.map(el => {
    return {
        name: el.name,
        nameLength: el.name.split(" ").join("").length

    }
})

//***FILTER***
//1. Get characters with mass greater than 100
const massGreater100 = characters.filter(value => value.mass > 100)


//2. Get characters with height less than 200
const heightLess200 = characters.filter(value => value.height < 200)

//3. Get all male characters
const maleCharacters = characters.filter(value => value.gender.toLowerCase() === 'male')

//4. Get all female characters
const femaleCharacter = characters.filter(value => value.gender.toLowerCase() === 'female')


//***SORT***
//1. Sort by mass
const sortMass = characters.sort((a, b) => a.mass - b.mass)

//2. Sort by height
const sortByHeight = characters.sort((a, b) => b.height - a.height)

//3. Sort by name
const sortByName = characters.sort((a, b) => {
    if (a.name < b.name) return -1
    return 1
})

//4. Sort by gender
const sortByGender = characters.sort((a, b) => {
    return a.gender === 'female' ? -1 : 1
})



//***EVERY***
//1. Does every character have blue eyes?
const blueEyes = characters.every(value => value.eye_color === 'blue')

//2. Does every character have mass more than 40?
const eveyMass40 = characters.every(value => value.mass > 40)

//3. Is every character shorter than 200?
const shorter200 = characters.every(el => el.height < 200)
//4. Is every character male?
const allMale = characters.every(value => value.gender.toLowerCase() === 'male')

//***SOME***
//1. Is there at least one male character?
const isMale = characters.some(el => el.gender === 'male')

//2. Is there at least one character with blue eyes?
const blueEyed = characters.some(el => el.eye_color === 'blue')

//3. Is there at least one character taller than 210?
const taller = characters.some(value => value.height > 210)

//4. Is there at least one character that has mass less than 50?
const massLess50 = characters.some(el => el.mass < 50)