/*
    Operadores unários
    typeof
    delete
*/

const person = {
    name: 'Gustavo',
    age: 20,
}
delete person.age // o delete vai procurar uma propriedade dentro de um obj e vai deletar a propriedade de dentro do obj, desde que a propriedade exista

console.log(person)



// console.log(typeof person) ==> O mais comun, sabera o tipo de dado. 