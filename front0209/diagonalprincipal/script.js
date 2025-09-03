// Criando a matriz 4x4
const matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

const tbody = document.querySelector("#tabelaMatriz tbody");
const diagonal = document.getElementById("diagonal");

// Preenchendo a tabela
matriz.forEach(linha => {
    const tr = document.createElement("tr");
    linha.forEach(valor => {
        const td = document.createElement("td");
        td.textContent = valor;
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
});

// Capturando valores da diagonal principal
const diagonalPrincipal = [];
for (let i = 0; i < matriz.length; i++) {
    diagonalPrincipal.push(matriz[i][i]);
}

// Exibindo a diagonal principal
diagonal.textContent = diagonalPrincipal.join(", ");
