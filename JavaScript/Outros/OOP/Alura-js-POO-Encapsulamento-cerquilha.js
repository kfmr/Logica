class User {
     #name
     #email
     #role
     #active
     #age

    constructor(name, email, role, active = true, age) {
        this.#name = name
        this.#email = email
        this.#role = role || "student"
        this.#active = active

    }

    #toObject() {
    return ({
        name: this.#name,
        email: this.#email,
        role: this.#role,
        active: this.#active

    })
}

showInfo() {
    // chamar um método privado dentro de um público
    const objUser = this.#toObject
    return `${objUser.name}, ${objUser.email}, ${objUser.#role}`
}
}