// importar readfile e writfile nativos
const {readFile, writeFile } = require('fs');

// escrever no arquivo
writeFile('newFile.txt', "esse texto foi escrito por writefile",(error, text) => {
    if(error) {
        throw error
    } else {
        console.log(text)
    }
})

// ler no arquivo
readFile('newFile.txt', (error, text) => {
    try {
        console.log(text.readFile)
    } catch (error) {
        throw error;
        
    }
})
