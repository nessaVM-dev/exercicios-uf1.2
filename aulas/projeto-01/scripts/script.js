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

// ==========================================================================
// Aula 2 - Operadores e Estruturas de Controlo
// A caixa do café morabesa 
// ==========================================================================

const aluno ="Vanessa";

console.log(`O nome do aluno é: ${aluno}`); // o nome do aluno e: vanessa

const precoCafe = 40.5;
const precoCapuccino = 50;

console.log(`A soma dos dois: ${precoCafe + precoCapuccino} `);
console.log(`Subtraindo: ${precoCapuccino - precoCafe}`);
console.log(`O preco de tres cafes e: ${precoCafe * 3}`);
console.log(`Black friday preco do cafe pela metade: ${precoCafe / 2}`);

console.log(`O resto de divisão: ${precoCafe % 2}`);
console.log(`Exponencial: ${precoCafe ** 2}`);

let caixa = 0;
let poteGorjeta = 0;

// vendi um cafe
caixa += precoCafe; // caixa = caixa + precoCafe
poteGorjeta += precoCafe * 0.1; // poteGorjeta = poteGojeta + precoCafe

// vendi um capuccino
caixa += precoCapuccino; 
poteGorjeta += precoCapuccino * 0.1;

// vendi um cafe com desconto de 10%
caixa += precoCafe;
caixa -= precoCafe * 0.1;

poteGorjeta /= 2;

console.log(`o valor atual da caixa e: ${caixa}`);

let numClientes = 0;

// ++ incrementa (adiciona) mais 1 sobre o valor atual
// -- decrementa (subtrai) mais 1 do valor atual

// entrou um cliente nove
numClientes++; // adiciona mais 1 sobre o numero de clientes // era 0 e ficou 1
// entrou mais um cliente
numClientes++; // adiciona mais 1 sobre o numero de clientes // era 1 e ficou 2~

// saiu um cliente
numClientes--; // subtrai 1 do numero de clientes // eram 2 e ficou 1

console.log(`o numero atual de clientes e: ${numClientes}`);

// verificar se o preco de cafe e maior do que o preco do capuccino
console.log(precoCafe > precoCapuccino); // false
console.log(precoCapuccino > precoCafe); // true

// verificar se o valor do caixa atual e maior do que 100, se for dou um bonus de 10% de gorjeta

console.log(caixa > 100);

// calculo de troco na venda de um cafe
let valorPago = 200;
console.log(valorPago > precoCafe);

console.log(`o troco e de: ${valorPago - precoCafe}`);

// calculo de troco na venda de um capuccino
let valorPago2 = 50;
console.log(valorPago2 === precoCapuccino);

console.log(`o troco e de: ${valorPago2 - precoCapuccino}`);