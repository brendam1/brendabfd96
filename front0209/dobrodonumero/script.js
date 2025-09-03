// Função que retorna o dobro de um número
function dobro(x) {
    return x * 2;
}

// Captura do botão e resultado
const botao = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function() {
    const numero = Number(document.getElementById("numero").value);

    if (isNaN(numero)) {
        resultado.textContent = "Por favor, digite um número válido!";
        return;
    }

    const dobroNumero = dobro(numero);
    resultado.textContent = `O dobro de ${numero} é ${dobroNumero}.`;
});
