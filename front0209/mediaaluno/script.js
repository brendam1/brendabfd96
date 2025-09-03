// Função que recebe um vetor de notas e retorna a média
function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

// Vetores de notas dos 3 alunos
const aluno1 = [7, 8, 9];
const aluno2 = [6, 7.5, 8];
const aluno3 = [9, 9.5, 10];

// Calculando médias
const media1 = calcularMedia(aluno1);
const media2 = calcularMedia(aluno2);
const media3 = calcularMedia(aluno3);

// Mostrando resultados
console.log("Média do Aluno 1:", media1.toFixed(2));
console.log("Média do Aluno 2:", media2.toFixed(2));
console.log("Média do Aluno 3:", media3.toFixed(2));
