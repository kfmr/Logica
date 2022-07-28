import {
    throws
} from 'assert'
import {
    createHash
} from 'crypto'

function hashCreated(pwd) {
    return createHash('sha256').update(pwd).digest('hex')
}

console.log(hashCreated("uma coisa é uma coisa"))

class User {
    constructor(name, password) {
        // guardar a hash do usuário
        this.name = name
        this.hash = hashCreated(password)
    }
    autenticate(name, password) {
        if (name === this.name && this.hash === hashCreated(password)) {
            return "User autenticated"
        }
        return "User not autenticated"
    }

}

const user = new User('Ayla', "szkdjak45")
console.log(user)

const userAutentication = user.autenticate(user.name, "szkdjak45")
console.log(userAutentication)