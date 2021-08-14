const nomes = `{
    "gatos":[
       {
          "nome":"Lucy",
          "idade":"2"
       },
       {
          "nome":"Bella",
          "idade":"3"
       },
       {
          "nome":"Luna",
          "idade":"4"
       }
    ],
    "cachorros":[
       {
          "nome":"Fox",
          "idade":"6"
       }
    ]
 }`
// manipular dados do JSON
// converte  json para objeto javascript
const jsonToObj = JSON.parse(nomes)
console.log(jsonToObj)

// transforma objeto javascript em json
console.log(JSON.stringify(jsonToObj))