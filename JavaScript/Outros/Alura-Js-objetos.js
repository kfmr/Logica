/* Exercicios feitos durante o curso fundamentos-javascript-objetos da Alura */


const pessoa = {
    "nome": "Ayla",
    "idade": 26,
    "cpf": "266.136.079-40", 
    'fone': [12345689, 78945612]
}
// substring - método de selecionar um range de elementos de uma string pelo indice
console.log(pessoa.cpf.substring(0,3))

console.log(pessoa.nome)

//consultar chaves numa lista de arrays
const chaves = ["nome", "idade", "cpf"]


// console.log(pessoa[chaves[1]])

// percorrer os valores do objeto 
chaves.forEach(info => console.log(pessoa[info]))

// criar ou modificar valores no objeto
pessoa.email = "teste@teste"
console.log(pessoa)

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

console.log(pessoa.fone[1])

pessoa.dependente = [{"nome": "Lua", "idade": 3}]
// adicionar array 
pessoa.dependente.push( {
    nome: "Luna",
    idade: "2"
}

)
// percorrer objetos
for(dado in pessoa) {
    console.log(dado,pessoa[dado])
}

//filtrar por idade
const filhaMaisnova = pessoa.dependente.filter(dependente => dependente.idade <= 2)
console.log(filhaMaisnova[0].nome)

// funções de um objeto
const pessoa2 = {
    "nome": "Alini",
    "idade": 32,
    "cpf": "266.136.079-40", 
    'fone': [12345689],
    saldo: 5000,
    getSaldo: function(valor) {
        return this.saldo
    },
    deposito: function(valor) {
        return this.saldo+=valor
    } 
}
console.log(pessoa2.getSaldo())
console.log(pessoa2.deposito(300))

const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com",
    adicionarTipo: function(propriedade,tipo){
        this[propriedade].push(tipo)
      }
   }
// a cada iteração adiciona a numeração da hq na chave tipocolecao
for(i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao","HQ"+i)
  }

console.log(colecionador)
let dados = []
for(let dado in pessoa2) {
    //verificar o tipo de dado para filtrar do array
    if(typeof pessoa2[dado] === 'object' || typeof pessoa2[dado] === 'function') {
        continue
    }
    else {
        dados.push(pessoa2[dado])
    }
}

console.log(dados)

const book = {
    id: 50,
    titulo: 'Primeiros Passos com NodeJS',
    autor: 'João Rubens',
    categoria: 'programação',
    versoes: [ 'ebook', 'impresso' ]
   }
// converte obj js em formato json
const bookToJson = JSON.stringify(book)
console.log(bookToJson)
// transforma em obj js
const bookJsonToObj = JSON.parse(bookToJson);
console.log(bookJsonToObj)

// spread operator ...
const listaDependentes = [...pessoa.dependente]
console.log(listaDependentes)

const nomes = {
    gatos: [
        {
            nome: "Lucy",
            idade: "2",
        },
        {
            nome: "Bella",
            idade: "3"
        },
        {
            nome: "Luna",
            idade: "4"
        }
    
    ], 

        cachorros: [
            {
            nome: "Fox",
            idade: "6"
        }
    ]
    
}
const gatos = [...nomes.gatos]
console.log(gatos)
// exibe a lista de nomes
for(nome in gatos) {
	console.log(gatos[nome].nome)
}
// exibe a lista de nomes
let catNames = []
gatos.forEach(info => catNames.push(info.nome))
console.table(catNames)