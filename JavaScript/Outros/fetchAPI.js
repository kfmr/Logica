/* 
instalar lib node-fetch se node version <18

*/

import fetch from 'node-fetch';

const retrieveapidata = async (url) => {
    const result = await fetch(url)
    return result
}

// const data = await retrieveapidata('https://rickandmortyapi.com/api/character')
// console.log(await data.json())



async function consultaCEP(cep) {
    try {
        const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        if (data.status === 400) {
            return data.statusText
        }

        return await data.json()
    } catch (error) {
        return error
    }

}

function consultaCEP(cep) {
    try {
        const data = fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(resp => {
                if (resp.status === 400) {
                    return {
                        "message": "CEP não localizado"
                    }


                } else {
                    return resp.json()
                }

            })

        return data
    } catch (error) {
        return error
    }

}


// console.log(await consultaCEP('0151500'))