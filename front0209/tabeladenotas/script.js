// Matriz 3x3 com notas de 3 alunos
const notas = [
    [8, 7, 9],  // Aluno 1
    [6, 9, 7],  // Aluno 2
    [10, 8, 9]  // Aluno 3
];

const tbody = document.querySelector("#tabelaNotas tbody");

// Preenchendo a tabela
notas.forEach((alunoNotas, index) => {
    const tr = document.createElement("tr");

    // Coluna do nome do aluno
    const tdAluno = document.createElement("td");
    tdAluno.textContent = `Aluno ${index + 1}`;
    tr.appendChild(tdAluno);

    // Colunas das notas
    alunoNotas.forEach(nota => {
        const td = document.createElement("td");
        td.textContent = nota;
        tr.appendChild(td);
    });

    // Coluna da média
    const media = (alunoNotas.reduce((ac, val) => ac + val, 0) / alunoNotas.length).toFixed(2);
    const tdMedia = document.createElement("td");
    tdMedia.textContent = media;
    tr.appendChild(tdMedia);

    tbody.appendChild(tr);
});
