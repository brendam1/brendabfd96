// Certifica que o JS roda depois que o DOM está pronto
document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("calcular");
    const resultado = document.getElementById("resultado");

    botao.addEventListener("click", function() {
        // Pegar valores dos inputs e converter para número
        const numeros = [
            Number(document.getElementById("num1").value),
            Number(document.getElementById("num2").value),
            Number(document.getElementById("num3").value),
            Number(document.getElementById("num4").value),
            Number(document.getElementById("num5").value)
        ];

        // Verificar se todos os campos foram preenchidos
        if (numeros.some(isNaN)) {
            resultado.textContent = "Por favor, preencha todos os números!";
            return;
        }

        // Somar os números
        const soma = numeros.reduce((ac, val) => ac + val, 0);

        // Exibir vetor e soma
        resultado.innerHTML = "Vetor: " + numeros.join(", ") + "<br>Soma: " + soma;
    });
});

