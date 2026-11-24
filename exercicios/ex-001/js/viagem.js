// Os dados da viagem

const origem = "Praia (Santigo)";
const destino = "São Filipe (Fogo)";
const precoBilhete = 3500;

let passageiros = 2;
let lugaresLivres = 120;

const temCamarote = false;

let numeroLugar;

const observacoes = " ";
let total;

// Os tipos

console.log(typeof origem);
console.log(typeof destino);
console.log(typeof precoBilhete);
console.log(typeof lugaresLivres);
console.log(typeof temCamarote);
console.log(typeof numeroLugar);
console.log(observacoes);
console.log(typeof total);

// Bilhete

total = precoBilhete * passageiros;

lugaresLivres = lugaresLivres - passageiros;

numeroLugar = 27;

console.log(`Viagem: ${origem}  ->  ${destino}`);
console.log(`Passageiros: ${passageiros}`);
console.log(`Lugar: ${numeroLugar}`);
console.log(`Camarote: ${temCamarote}`);
console.log(`Total: ${total} escudos`);
console.log(`Lugares livres no barco: ${lugaresLivres}`);

// Mais um passageiro
passageiros = passageiros + 1;

total = precoBilhete * passageiros;

lugaresLivres = lugaresLivres - 1;

console.log(`Com ${passageiros} passageiros, o total é ${total} escudos.`);
console.log(`Lugares livres no barco: ${lugaresLivres}`);