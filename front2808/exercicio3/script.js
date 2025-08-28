function soma(a, b) {
            return a + b;
        }

        function subtrai(a, b) {
            return a - b;
        }

        function multiplica(a, b) {
            return a * b;
        }

        function divide(a, b) {
            return b !== 0 ? a / b : 'Erro: divisão por zero';
        }

        const num1 = document.getElementById("num1");
        const num2 = document.getElementById("num2");
        const botão = document.getElementById("calcular");
        const resultado = document.getElementById("resultado");

        botão.addEventListener("click", function () {
            const a = parseFloat(num1.value);
            const b = parseFloat(num2.value);

            if (isNaN(a) || isNaN(b)) {
                resultado.innerHTML = "Por favor, insira dois números válidos.";
                return;
            }

            resultado.innerHTML = `
                Soma: ${soma(a, b)} <br>
                Subtração: ${subtrai(a, b)} <br>
                Multiplicação: ${multiplica(a, b)} <br>
                Divisão: ${divide(a, b)}
            `;
        });
    </script>
</body>
</html>
