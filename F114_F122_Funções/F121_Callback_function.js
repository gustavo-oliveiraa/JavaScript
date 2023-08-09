// callback function
// callback function nada mais é que uma função que está passando de parâmetro para outra função
// callback - chame de volta

function sayMyName(name) {
    console.log('antes de executar a função callback')
    
    name()

    console.log('depois de executar a callback')

}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)
// --------------------------------------------------------------

/*  como se fosse

function sayMyName() {
    console.log('antes de executar a função callback')
    
    function name() {
        console.log('estou em uma callback')
    }
    name()
    
    console.log('depois de executar a função callback')
}

sayMyName()
*/