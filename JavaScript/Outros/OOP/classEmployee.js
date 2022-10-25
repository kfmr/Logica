/*Excreva uma classe chamada Employee,
que modela um funcionário com os atributos id, name e salary.
O método raiseSalary() aumenta o salário baseado numa dada porcentagem.
Escreva a classe Employee.
- Escrever a class
- Criar o metódo raiseSalary()
 aumento=salario * 12
        salario=(salario+aumento)
*/

class Employee {
    constructor(id, name, salary) {
        this.id = id
        this.name = name
        this.salary = salary
    }
    raiseSalary(value) {
        this.salary += this.salary * value / 100
        return `O novo salario de ${this.name} é ${this.salary} com aumento de ${value}%`

    }
}

const employee1 = new Employee(1, "aila", 2000)
a = employee1.raiseSalary(10)
console.log(a)