import {
    createCipheriv,
    randomBytes,
    createDecipheriv
} from 'crypto'

const message = "Criptografia"
// chave aleatoria que será compartilahda
const key = randomBytes(32)
// vetor de inicialização
const vi = randomBytes(16)

const cipher = createCipheriv('aes-256-gcm', key, vi);

const messageCipher = cipher.update(message, 'utf-8', 'hex') + cipher.final('hex');

console.log(messageCipher)

// transmissçao -- chave, vi, mensagem

const decipher = createDecipheriv('aes-256-ccm', key, vi)

const messageDec = decipher.update(messageCipher, 'hex', 'utf-8') + decipher.final().toString()
consolelog(messageDec)