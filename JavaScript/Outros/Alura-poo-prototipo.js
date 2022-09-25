const user = require("./poo-obj");

const admin = {
  name: "ayla",
  age: 24,
  roles: "admin",
  createClass() {
    console.log("criado");
  },
};

// criação do protótipo com Object
// definir um prototipo 1- herdar propriedade 2 - o objeto que cede a propriedade
let admin1 = Object.setPrototypeOf(admin, user);
admin1.show();
