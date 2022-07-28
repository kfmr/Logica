import {
    scryptSync,
    randomBytes,
    timingSafeEqual
} from 'crypto'

function saltyHash(pwd) {
    const salt = randomBytes(16).toString('hex')
    const hashedPwd = scryptSync(pwd, salt, 64).toString('hex')
    return `${salt}:${hashedPwd}`
}



class User {
    constructor(name, pwd) {
        this.name = name;
        [this.salt, this.hash] = saltyHash(pwd).split(':')
    }
    autenticate(name, pwd) {
        if (name === this.name) {
            const validateHash = scryptSync(pwd, this.salt, 64),
                realHash = Buffer.from(this.hash, 'hex'),
                correspondeHash = timingSafeEqual(validateHash, realHash);
            if (correspondeHash) {
                console.log("usuario autenticado com sucesso");
                return true
            }

        }
        console.log("nao autenticado")
        return false

    }
}


const user1 = new User('ayla', "1345dasd")

console.log(user1)
// sucesso
let a = user1.autenticate(user1.name, "1345dasd")

// erro
let b = user1.autenticate(user1.name, "1345asd")