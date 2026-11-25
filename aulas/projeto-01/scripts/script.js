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

// Operadores Logicos

const age = 18;
const genero = "m";

console.log(10 > 5 && 10 > 14); // true && false = false
console.log(age >= 18 && genero === "m"); // true && true = true

const temCartaoFidelidade = true;
const temCuponDesconto = false;

console.log(temCartaoFidelidade || temCuponDesconto); // true || false = true
console.log(!temCartaoFidelidade ); // !true => false

// Estruturas de controlo

// Decisores

/*
   if - se
   else - senao
   else if - senao se
   switch - escolha ou casos

   Se (consicao for verdadeira) entao {
       // faça isto 
   }  senao entao {
       // faça aquilo
   }  senao se (outra condicao for verdadeira) entao {
       // faça isto
   }

   se idade for maior do que 18 entao
       // pode entra no churasco
   senao se estiver acompanhado de um respomsavel entao
       // pode entrar no churasco
   senao 
       // nao pode entrar no churasco

*/ 

if (age >= 18) {
    console.log("e maior de idade");
} else {
    console.log("nao e maior de iade");
}

if (age >= 18 && genero === "m") {
    console.log("el eh grande e matxo");
} else if (age >= 18 && genero === "f"); {
    console.log("el eh grande e femia");
} 

/*
   switch (nacionalidade)
   case: "cv"
      console.log("kualeh nha mano")
      break
   case: "pt"
      console.log("como estas")
      break
   case: "gui"
      console.log("eh cuman de corpo")
      break
   case: "sen"
      console.log("na nga def")
      break
   default:
      console.log("agh kz mo stau")


 */

const nacionalidade = "gui";

 switch (nacionalidade) {
   case "cv":
      console.log("kualeh nha mano");
      break;
   case "pt":
      console.log("como estas");
      break;
   case "gui":
      console.log("eh cuman de corpo");
      break;
   case "sen":
      console.log("na nga def");
      break;
   default:
      console.log("agh kz mo stau");
 }      

 // Ciclos

 // for -> usamos quando soubermos exatamente quantas vezes queremos que o 
 // ciclo rode

 for (let i = 1; i <= 5; i++) {
    console.log(`cliente numero ${i}`);
 }

 let precoTemp = 90;
 for (let quantidade = 1; quantidade <= 5; quantidade++) {
    console.log(`${quantidade} cafes custam : ${precoTemp * quantidade}`);
 }

 // contador que conta de 10 a 04
 for (let i = 10; i >= 0; i--) {
    console.log(`Tempo restante : ${i}`);
 }

 // while -> quando nao sobemos exatamente quantas vezes queremos que o 
 // ciclo rode

 const precoMoinho = 5000;
 const poupancaDiaria = 100;
 let totalPoupado = 0;
 let dia = 0;

 while (totalPoupado <= precoMoinho) {
   totalPoupado += poupancaDiaria;
   dia++;
 }