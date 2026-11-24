/* 
    variaveis: 
        -let
        -const

*/

let nome = "vanessa"; // string
let idade = 20; // number (inteiro)
let estaPresente = true; // boolean (true ou false)
let altura = 1.67; // number (float)
let nota; // undefined
let media = null; // valor intencional de vazio

const morada = "safende";  // string

nome = "maria";
idade = 28;
// morada = "street"; // nao e passivel alterar uma const

console.log("Meu nome e: " + nome, "minha idade: " + idade);
console.log("minha morada e: " + morada);

console.log(typeof nome); // tipo de dados da variavel nome

let nomeCafe = "Capuccino";
let preco = 250;
let quantidade;

let resposta = prompt("Quantos capuccinos deseja pedir?");
quantidade = parseInt(resposta);

let total = 0;

total = preco * quantidade;

console.log(nome + "pediu" + quantidade + " " + nomeCafe);
console.log("O total a pagar e de " + total + "escudos.");