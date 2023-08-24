/*
    Type conversion (typecasting) vc Type coersion
*/

console.log(Number('9') + 5)
console.log('9' + 5)



/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório 
    ( condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log( false ? 'verdadeiro' : 'falso' )
//  se for verdadeiro escreva "verdadeiro" se não escreva "false"



/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório ( condicionais e loops )

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( true ? 'verdadeiro' : 'false' )



console.log( 3.23 ==  true ? 'verdadeiro' : 'false' ) // Aqui seria falso, fzd esse comparativo

