const estados = [{
        estado: "SP",
        capital: "São Paulo - SP"
    },
    {
        estado: "MG",
        capital: "Belo Horizonte - MG"
    },
    {
        estado: "ES",
        capital: "Vitoria - ES"
    }
]
const capitais = estados.map((el) => {
    return {
        title: el.capital,
        value: el.estado
    }
})
console.log(capitais)