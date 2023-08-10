/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const gustavo = new Person("Gustavo")
const joao = new Person("Joao")
console.log(gustavo.walk())
console.log(joao.walk())



// let name = new String("Gustavo")

// console.log(name)


//let date = new Date("2023-08-10")

//console.log(date)
