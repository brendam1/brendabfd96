// Função que calcula o dobro
document.addEventListener('DOMContentLoaded', function () {
  const botao = document.getElementById('btnCalcular');

  botao.addEventListener('click', function () {
    const numeroInput = document.getElementById('numero');
    const resultado = document.getElementById('resultado');

    const valor = numeroInput.value.trim();

    if (valor === '') {
      resultado.textContent = 'Por favor, digite um número.';
    } else {
      const numero = Number(valor);

      if (isNaN(numero)) {
        resultado.textContent = 'Valor inválido.';
      } else {
        const dobro = numero * 2;
        resultado.textContent = `O dobro de ${numero} é ${dobro}.`;
      }
    }
  });
});
