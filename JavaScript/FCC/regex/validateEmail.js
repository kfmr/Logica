
// caractere, arroba, ponto, caractere
const validEmail = /\w+@\w+\.\w+/

console.log(validEmail.test("teste@teste.com"))
console.log(validEmail.test("@teste.com"))