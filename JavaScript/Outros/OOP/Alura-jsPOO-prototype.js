class User {
    constructor(name, email, nasc, role, active = true) {
        this.name = name
        this.email = email
        this.nasc = nasc
        this.role = role || "student"
        this.active = active
    }
    showInfo() {
        return `${this.name}, ${this.email}`
    }
}

const newUser1 = new User("ayla", "teste@teste", "s")
console.log(newUser1)


function User1(name, email) {
    this.name = name
    this.email = email

    this.showInfo = function () {
        return `${this.name}, ${this.email}`
    }
}

const ayla = new User1("Ayla", "teste@teste.com")
console.log(ayla)


function Admin(role) {
    User1.call(this, "ayla", "teste")
    this.role = role || "estudante"
}

Admin.prototype = Object.create(User1.prototype)

const newUser = new Admin("admin")
console.log(newUser.showInfo())