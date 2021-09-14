const fs = require('fs')
const path = require('path')
// console.log(path)
const caminhoAtual = path.join(__dirname, 'arq.txt')
console.log(caminhoAtual)
function exibirConteudo(err,conteudo){
    console.log(conteudo.toString())
}
// forma assincrona
fs.readFile(caminhoAtual, exibirConteudo)

//forma sincrona
const conteudo = fs.readFileSync(caminhoAtual)
console.log(conteudo.toString())