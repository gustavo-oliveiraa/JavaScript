/* Expressões e Operadores

- Expressions
- Operators
    Binary
    Unary
    Ternary
*/

//                      Expressões

// expressões é qualquer linha de codigo que resolve alguma coisa no Js

// é uma expressão
let number = 1; 

// É uma expressão de uma função auto executavel
(function() {
    console.log('alo')
})()



//                      Operadores

let number = 1
// operador binario (operador aritmetico de soma = +)
console.log(number + 1)

// operador unario (operador de incremento = ++(...))
console.log(++number)

// operador unario (operador de decremento = --(...))
console.log(--number)

// typeof é um operador unario

// ternario, recebe uma expressão, é o unico caso que eu tenho 3 expressões para que se defina alguma coisa
console.log(true ? 'alo' : 'nada') // (true, então ele vai fazer alguma coisa('alo'), se não ('nada'))

console.log(false ? 'alo' : 'nada')