function findNeedle(haystack) {
    let index = haystack.indexOf('needle')
    return `found the needle at position ${index}`
}

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))

// ou 
function findNeedleIndex(haystack) {
    let needle;
    for (word in haystack) {
        if (haystack[word] == 'needle') {
            needle = word
            break
        }

    }
    return needle
}