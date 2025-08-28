// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function () {
  const botao = document.getElementById('botaoSaudacao');

  botao.addEventListener('click', function () {
    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem');

    if (nome === '') {
      mensagem.textContent = 'Por favor, digite seu nome.';
    } else {
      mensagem.textContent = `Olá, ${nome}! Seja bem-vindo(a)! 👋`;
    }
  });
});

