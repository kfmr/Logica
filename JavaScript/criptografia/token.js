import
jwt
from "jsonwebtoken";

const secretKey = "chave secreta"

const token = jwt.sign({
    apelido: "jm",
    curso: "jwt e token"
}, secretKey)

//console.log(token)

// decodificar
const decodedToken = jwt.verify(token, secretKey)
console.log(decodedToken)