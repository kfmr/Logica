import {
    generateKeyPairSync,
    publicEncrypt,
    privateEncrypt
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

//console.log(`${publicKey}\n${privateKey}`)

const encriptedData = publicEncrypt(publicKey, Buffer.from("mensagem"))

//console.log(encriptedData.toString('hex'))

// transmissão
const decryptData = privateEncrypt(privateKey, encriptedData)

console.log(decryptData.toString('utf-8'))