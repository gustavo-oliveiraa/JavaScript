// function hoisting
// função do tipo statement - declaration

sayMyName();

function sayMyName() {
    console.log('Gustavo')
}

/* 
    Por de baixo dos panos
    "Como se fosse"

    function sayMyName() {
        console.log('Gustavo')
}

    sayMyName();
*/

// função na maneira de expressão, nao ocorre o hoisting
 
sayMyName()

const sayMyName = function() {
    console.log('Gustavo')
}