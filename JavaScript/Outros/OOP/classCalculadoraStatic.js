/*
- Classes com métodos estáticos não alteram o estado do objeto. 
- Declarados com o static
- não precisam ser instanciados com o new
- Não guardam estado do objeto
*/


class Calculadora {
    
    
    static somar(n1,n2){
        return n1 + n2
    }

    static multiplicacao(n1,n2){
        return n1 * n2
    }

    static divisao(n1,n2){
        return n1 / n2
    }

    static subtracao(n1,n2){
        return n1 - n2
    }
}





calc = Calculadora

console.log(calc.somar(7,10))
console.log(calc.divisao(50,5))

 