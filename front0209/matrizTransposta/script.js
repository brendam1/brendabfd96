// Matriz 2x3
const matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

// Função para criar tabela
function criarTabela(matriz, idTabela) {
    const tbody = document.querySelector(`#${idTabela} tbody`);
    tbody.innerHTML = ""; // Limpa tabela antes de preencher

    matriz.forEach(linha => {
        const tr = document.createElement("tr");
        linha.forEach(valor => {
            const td = document.createElement("td");
            td.textContent = valor;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}

// Função para calcular a transposta
function transposta(matriz) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;
    const trans = [];

    for (let i = 0; i < colunas; i++) {
        trans[i] = [];
        for (let j = 0; j < linhas; j++) {
            trans[i][j] = matriz[j][i];
        }
    }
    return trans;
}

// Exibir matriz original
criarTabela(matriz, "matrizOriginal");

// Exibir matriz transposta
const matrizT = transposta(matriz);
criarTabela(matrizT, "matrizTransposta");
