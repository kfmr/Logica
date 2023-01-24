const endereco = {
    msgEndereco: "dasdks"
}
const email = 'teste@teste.com'
const tel = '116533131'
const dataNasc = '1/11/2021'


function run(telefone, email, dataNasc, address) {
    const data = [{
            endereco: address.msgEndereco
        },
        {
            email: email
        },
        {
            telefone: telefone
        },
        {
            dataNasc: dataNasc
        }
    ]

    const options = data.map(el => {
        return {
            order: data.indexOf(el) + 1,
            text: el
        }
    })

    const menu = {
        text: "Gostaria de confirmar os seus dados ou editar? Escolha uma das opções abaixo",
        options: options
    }
    return JSON.stringify(menu);
}

console.log(run(tel, email, dataNasc, endereco))