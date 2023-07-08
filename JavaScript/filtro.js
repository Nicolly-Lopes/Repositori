const outFiltro = document.getElementById("outFiltro");
const filtro = document.querySelector('.inBarraPesquisa');

filtro.addEventListener('input', function () {
    if (filtro.value === "") {
        outFiltro.innerHTML = '';
        filtro.focus();
    }
});

filtro.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        pesquisarArea();
    }
});

btPesquisar.addEventListener("click", pesquisarArea);

function pesquisarArea() {
    var opMaiuscula = filtro.value
    var flag = 0;

    frase2 = document.getElementById("titulo2")
    if (frase2) {
        frase2.remove();
    }

    outFiltro.innerHTML = "";

    if (filtro.value == "") {
        alert("Você precisa digitar o nome de uma área!");
    } else {

        var vetSetor = [];
        var vetProd = [];
        var vetDivisor = [];
        var divisor = 0;
        var contadora = 0;
        var ano = 2014;

        for (var ind = 0; ind < vetID.length; ind++) {
            if (vetID[ind] == opMaiuscula.toUpperCase()) {
                flag++;
                vetSetor.push(vetArea[ind]);
                vetProd.push(vetSacas[ind]);
                divisor = vetProd[contadora] / vetSetor[contadora];
                vetDivisor.push(divisor);
                outFiltro.innerHTML += `<br> No ano de ${ano} a área ${filtro.value} produziu  um total de ${vetProd[contadora]} sacas, tendo uma média de ${vetDivisor[contadora].toFixed(2)} sacas/ha`
                contadora++;
                ano++;
            }
        }
    }
    if (flag == 0) {
        outFiltro.innerHTML = `Não existe essa área na fazenda`;
    } else {
        outFiltro.innerHTML += `<br> <br>Lembrete: A área ${filtro.value} tem um total de ${vetSetor[0]}ha`
    }
}

