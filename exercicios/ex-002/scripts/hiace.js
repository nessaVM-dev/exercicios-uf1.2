// ==========================================================================
// A Hiace para o Interior
// ==========================================================================

const codigo = prompt("Escolha o destino: 1 - Assomada, 2 - Tarrafal, 3 - Pedra Badejo, 4 - Cidade Velha");

let destino = "";
let preco = 0;

switch (codigo) {
    case "1": 
       destino = "Assomada";
       preco = 250;
       break

    case "2":
        destino = "Tarrafal";
        preco = 500;
        break;
    
    case "3":
        destino = "Pedra Badejo";
        preco = 200;
        break;
    case "4":
        destino = "Cidade Velha";
        preco = 100;
        break;

    default:
        console.log("Esse destino não existe.");

}

if (destino === "") {
   console.log("Esse destino não existe.");
} 

const idade = Number(prompt("Qual é a idade do passageiro?"));
const hora = Number(prompt("Qual é a hora da viagem? (0 a 23)"));
const bagagem = prompt("Leva bagagem grande? (s/n)");


if (
    Number.isNaN(idade) || 
    idade < 0 ||
    Number.isNaN(hora) ||
    hora < 0 ||
    hora > 23 ||
    (bagagem !== "s" && bagagem !== "n")

) {
    console.log("Os dados introduzidos não são válidos.");
}

let tarifa = "Normal";
let total = preco;

if (idade < 5) {
    tarifa = "Grátis";
    total = 0;
} else if (idade < 12 || idade >= 65) {
    tarifa = "Metade do preço";
    total = preco / 2;
}


if (bagagem === "s") {
    total += 100;
}

const noturna = hora >= 19 || hora < 6;

if (noturna) {
    total += 50;
}

console.log(`Destino: ${destino}`);
console.log(`Hora da viagem: ${hora} horas`);
console.log(`Tarifa: ${tarifa}`);

if (bagagem === "s") {
    console.log("Bagagem grande: Sim");
} else {
    console.log("Bagagem grande: Não");
}

console.log(`Viagem noturna: ${noturna}`);
console.log(`Total a pagar: ${total} escudos`);