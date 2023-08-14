/*
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo

*/

//  Type conversion (typecasting) = explicitamente eu altero um dado de um tipo pra outro
// conversion = conversão

//  Type coersion = é o Js implicitamente fazendo essa troca
// coersion = coersão, (forçar uma troca)

console.log('9' + 5) // um tipo de coersion, tranformou um tipo nuimber para um tipo string (de 5 para '5')

console.log(Number('9') + 5) // um tipo de conversion, usando uma função para transformar uma string para number (de '9' para 9) 