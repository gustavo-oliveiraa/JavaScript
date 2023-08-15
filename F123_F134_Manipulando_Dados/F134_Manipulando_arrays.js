// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")

// adicionar no começo
techs.unshift("sql")

// remover do fim
techs.pop()

// remover do começo
techs.shift()

// pegar somente alguns elementos do array
console.log(techs.slice(1, 3)) = aparece ["css", "js"] // slice: cortar | o 1º argum recebe qual a posição de inicio que eu quero que ele retire, o 2º argum vai receber qual a posição final do array que eu quero (conta como elementos, no caso do array acima seria ate o 3)

// remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 2) = aparace ["html"] // no 1º argum eu indico qual o index do array (oque eu quero tirar daqui), no 2º eu indico quantos argumentos eu quero tirar 

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')    // indexOf: Qual o index de (...)
techs.splice(index, 1) //  posição e quantos elementos eu quero remover

console.log(techs)
