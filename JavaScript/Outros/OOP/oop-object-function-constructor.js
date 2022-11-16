"use strict";

function User(name, age) {
  this.name = name;
  this.age = age;
  this.show = function () {
    console.log(this.name, this.age);
  };
}

const newUser = new User("mariana", "m@m.com");
//newUser.show();
// objeto literal
const User1 = {
  name: "ayla",
  age: 20,
  show: function () {
    console.log(this.name, this.age);
  },
};

//User1.show();
// desassociado ao objeto de origem
let a = User1.show;
//a();
// associa ao objeto
//a = User1.show();

// bind - método associativo ao contexto

function showName() {
  console.log(this.name);
}

let b = showName.bind(User1);
//b();

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
let admin1 = Object.setPrototypeOf(admin, User1);
admin1.show();
