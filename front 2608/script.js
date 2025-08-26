document.addEventListener("DOMContentLoaded", () => {
   // matriz : notas de 3 alunos em 3 provas
   let notasAlunos = [
    [7, 8, 6],
    [9, 5, 8],
    [6, 7, 7]

   ];
    
   const tabela = document.querySelector("#tabelaNotas tbody")
   
   for (let i = 0; i < notasAlunos.length; i++) {
    let linha
    let celAluno = document.createElement("tr");
    celAluno.textContext = `aluno ${i+1}`;
    linha.appendChild(celAluno);

    // notas e soma
    let soma = 0;
    for (let j = 0; j < notasAlunos[i].length; j++) {
        let celNota = document.createElement("td");
        celNota.textContent = notasAlunos [i][j];
        linha.appendChild(celNota);
        soma += notasAlunos[i][j];
}
// media 
let media = soma / notasAlunos[i].length;
let celMedia = document.createElement("td");
celMedia.textContent = media.toFixed(2);
linha.appendChild(celMedia);

tabela.appendChild(linha); 
}

});
