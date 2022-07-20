const books = new Set([
    ["title", "alice in wonderland"],
    ["author", "Lewis Carroll"]
])

const booksObj = new Map(books)

console.log(booksObj)

booksObj.forEach((data, key) => console.log(key, data))