// if...else

let temperature = 37

if(temperature >= 37.5) {
    console.log('Febre alta')
} else if(temperature < 37.5 && temperature >= 37){
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

// transformar as condicionais em variaveis que tenham relevancia, que indiquem oq estão fazendo

let temperature = 39
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature){
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}
