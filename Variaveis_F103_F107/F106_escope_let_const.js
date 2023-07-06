// const e let são locais e só funcionam no escopo onde foi criada

let y = 1

{ // escopo
    // let y = 0
    y = 0
    console.log('> existe y ', y)
}

console.log('> existe y depois do bloco? ', y)



const z = 1

{
  const z = 0
  console.log('> existe z ', z)
}

console.log('> existe z depois do bloco> ', z)
