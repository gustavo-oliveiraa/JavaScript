// function scope   * dar uma revisada depois 
let subject

function createThink() {     // se n tivesse o parametro, estaria subscrevendo
    subject = 'study'
}

console.log(subject)
createThink()
console.log(subject)

/* 
// function scope   * dar uma revisada depois 
let subject = 'create video'

function createThink(subject) {     // se n tivesse o parametro, estaria subscrevendo
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))
*/