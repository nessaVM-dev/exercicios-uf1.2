// ==========================================================================
// A Pauta da Turma
// ==========================================================================

const nome = prompt("Qual é o nome do formando?");
const notaTexto = prompt("Qual é a nota final (0 a 20)?");

const nota = Number(notaTexto);


let classificacao = "";

if (Number.isNaN(nota) || nota < 0 || nota > 20) {
        console.log("A nota tem de ser um número de 0 a 20.");
} else {

    if (nota < 10) {
        classificacao = "Não aprovado";
    } else if (nota < 14) {
        classificacao = "Suficiente";
    } else if (nota < 16) {
        classificacao = "Bom";
    } else if (nota < 18) {
        classificacao = "Muito bom";
    } else {
        classificacao = "Excelente";
    }
}

const aprovado = nota >= 10;

const valoresEmFalta = 20 - nota;

const notaPar = nota % 2 === 0;

console.log(`Nome do formando: ${nome}`);
console.log(`Nota final: ${nota}`);
console.log(`Classificação: ${classificacao}`);
console.log(`Está aprovado? ${aprovado}`);
console.log(`Valores que faltam para 20: ${valoresEmFalta}`);
console.log(`A nota é um número par? ${notaPar}`);
