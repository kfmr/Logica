const arr = [1, 2, 4]

// a segunda virgula vai ignora o segundo elemento do array
let [x, , y] = arr

console.log(x, y)


function maiorMenor(min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return {
        min,
        max
    }
}

console.log(maiorMenor(7, 2))