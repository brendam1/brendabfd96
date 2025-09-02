<script>
    function analisar(){
        let numeros = [];
        for (let i = 0 ; i < 5; i++) {
            let valor = Number(document.getElementById("n" + i).value);
            numeros.push(valor);

        }
        let maior = numeros[0];
        let menor = numeros[0];
        for (let i = 1; i < numeros.length;i++){
            if (numeros[i]> maior) maior = numeros[i];
            if (numeros[i]<menor) menor = numeros[i]; menor = numeros[i];
            document.getElementById("resultado").innerHTML =
            "numeros digitados: " + numeros.join (",") + "<br>" + " maior numero: " + maior + "<br>" + 'menor numero: ' + menor; {
                
            }
        }
    }