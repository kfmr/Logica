import {
    generateKeyPairSync,
    createSign,
    createVerify
} from 'crypto'

const {
    privateKey,
    publicKey
} = generateKeyPairSync('rsa', {
    modulusLength: 2848, // Implementing options
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
})

let data = "mensagem assinada"

// assinatura - fazer um assinador(objeto)
const assinador = createSign('rsa-sha256')

assinador.update(data)
const assinatura = assinador.sign(privateKey, 'hex')

//console.log(assinatura)

// intermediario
//data += 'err'

// envio do documento
const verificador = createVerify('rsa-sha256')

verificador.update(data)

const verified = verificador.verify(publicKey, assinatura, 'hex')

console.log(verified)