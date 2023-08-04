// 1. Declare uma variável de nome weight

// Resposta:
let weight;

// 2. Que tipo de dado é a variavel acima?

// Resposta:	
console.log(typeof weight) // undefined

/* 3. Declare uma variável e atribua valores para cada um dos dados:
	* name: String
	* age: Number (integer)
	* stars: Number (float)
	* isSubscribed: Boolean
*/

// Resposta:
	let name = 'Gustavo'
	let age = 20
	let stars = 4.5
	let isSubscribed = true

/* 
   4. A variável student abaixo é de que tipo de dado?

   4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

   4.2 Mostre no console a seguinte mensagem:

	<name> de idade <age> pesa <weight> kg.

	Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

// Resposta: 
let student = {
	name: 'Gustavo',
	age: 20,
	weight: 100.3,
	isSubscribed: true
};

console.log(typeof student) // object

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
	5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

let students = []

/*
	6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
	student
]

/* 
	7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])

/*
	8. Crie um novo student e coloque na posição 1 do Array students
 */

const john = {
       name: "John",
	age: 22,
	weight: 80.2,
	isSubscribed: true
}

	
