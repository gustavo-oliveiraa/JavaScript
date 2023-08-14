// Manipulando Strings e Arrays


// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaço, coloque _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ") //  Tranformou de String para Array atraves do split
let phraseWithUnderscore = myArray.join("_") // Transformou de Array de volta para String com o join
console.log(phraseWithUnderscore.toLowerCase())