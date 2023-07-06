// iniciar o bloco
{
  let x = 0
  console.log(x)
}

--------------------------------------------------------------

// var é global e também local
// global = tudo que está executando na aplicação
// local = é o que somente existe dentro de um scopo (visivel)
// hoisting

console.log('> existe x antes do bloco? ', x)

{
    var x = 0
}

console.log('> existe x depois do bloco? ', x)



//  hoisting / quando for "var" isso ocorre, pela "var" ser global
  var x

  console.log('> existe x antes do bloco? ', x)

  {
      x = 0
  }

  console.log('> existe x depois do bloco? ', x)
