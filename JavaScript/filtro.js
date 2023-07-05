const outFiltro = document.getElementById("outFiltro");
var btPesquisar = document.getElementById("btPesquisar");
var filtro = document.querySelector('.inBarraPesquisa');
filtro.value = "";
filtro.focus();

btPesquisar.addEventListener("click", pesquisarTime);
function pesquisarTime() {
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
        var mediaTotal = 0;
        var prodTotal = 0;


        for (var ind = 0; ind < vetID.length; ind++) {
            if (vetID[ind] == filtro.value) {
                vetSetor.push(vetArea[ind]);
                vetProd.push(vetSacas[ind]);
                divisor = vetProd[contadora] / vetSetor[contadora];
                vetDivisor.push(divisor);
                prodTotal+= vetSacas[ind];
                mediaTotal+=divisor;
                outFiltro.innerHTML += `<br> No ano de ${ano} a área ${filtro.value} produziu  um total de ${vetProd[contadora]} sacas, tendo uma média de ${vetDivisor[contadora].toFixed(2)} sacas/ha`
                contadora++;
                ano++;
            }
        }
        outFiltro.innerHTML += `<br> <br> A área ${filtro.value} tem um total de ${vetSetor[0]}ha, juntando todas as safras produziu um total de ${prodTotal} sacas e tendo uma média total de${(mediaTotal/10).toFixed(2)} sacas/ha`
    }
}

