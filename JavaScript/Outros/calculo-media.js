//calculo de média 
var nota1 = parseInt(prompt("digite sua primeira nota"))
var nota2 = parseInt(prompt("digite sua segunda nota"))
var nota3= parseInt(prompt("digite sua terceira nota"))
var nota4 = parseInt(prompt("digite sua quarta nota"))

var resultado = (nota1 + nota2 + nota3 + nota4) / 4 

console.log("sua media é " + resultado.toFixed(2))

//Calculo de aprovacao de aluno 

var nota1 = parseInt(prompt("digite sua primeira nota"))
var nota2 = parseInt(prompt("digite sua segunda nota"))
var nota3= parseInt(prompt("digite sua terceira nota"))
var nota4 = parseInt(prompt("digite sua quarta nota"))

var resultado = (nota1 + nota2 + nota3 + nota4) / 4 

console.log("Sua media é " + resultado.toFixed(2) + ".")
if (resultado >= 6) {
    console.log("Você foi aprovado.")
} else {
 console.log("Você foi reprovado.")
}