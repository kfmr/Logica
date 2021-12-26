/* Aula 1 */
// recebe uma função como parametro
let p = new Promise(function (resolve) {
    resolve(2)
})
// recebe uma função para executar a promessa. Quando a primeira promessa for cumprida, o then será chamado
p.then((valor) => String(valor))
    // função passada como referencia
    .then(console.log)


/* 
Aula 2
- callback hell: varias funções callbacks sendo executadas dentro de uma outra função callback
http://callbackhell.com/
*/

function waitTime(time = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => console.log('exec'), time)
        resolve(console.log('exec2'))


    })
}
waitTime().then(value => value)
// resolve é exibido primeiro

/* 
Aula 3

*/

function gerarNumEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        const random = Math.random() * (max - min + 1) + min
        resolve(parseInt(random))
    })
}

gerarNumEntre(7, 2).then(console.log)