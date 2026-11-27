// ==========================================================================
// Desafio Bónus: Ano Bissexto
// ==========================================================================

const ano = Number(prompt("Introduza um ano:"));

if (Number.isNaN(ano) || ano <= 0 || ano % 1 !== 0) {
    console.log("Introduza um ano válido.");
} else {
    const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;

    const dias = bissexto ? 366 : 365;

    console.log(`Ano: ${ano}`);
    console.log(`É bissexto? ${bissexto}`);
    console.log(`Este ano tem ${dias} dias.`);
}