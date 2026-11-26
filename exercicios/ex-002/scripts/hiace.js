// ==========================================================================
// A Hiace para o Interior
// ==========================================================================

const destinoCodigoTexto = prompt("Escolha o destino:\n1 - Assomada\n2 - Tarrafal\n3 - Pedra Badejo\n4 - Cidade Velha");

const destinoCodigo = Number(destinoCodigoTexto);

let destino;
let preco;

switch (destinoCodigo) {
    case 1: 
       destino = "Assomada";
       preco = 250;
       break

    case 2:
        destino = "Tarrafal";
        preco = 500;
        break;
    
    case 3:
        destino = "Pedra Badejo";
        preco = 200;
        break;
    case 4:
        destino = "Cidade Velha";
        preco = 100;
        break;
    default:
        console.log("Esse destino não existe.");

}

if (destino !== undefined) {
    const indadeTexto = prompt("Qual é a idade do passageiro");
    const idade = Number(indadeTexto);

    const horaTexto = prompt("Qual é a hora da viagem (0 a 23)?");
    const hora = Number(horaTexto);

    const bagagem = prompt("Leva bagagem grande? (s/n)");

    if (

    )
}