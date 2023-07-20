var outFiltro = document.getElementById("outFiltro");
const filtro = document.querySelector('.inBarraPesquisa');

filtro.addEventListener('input', function () {
    if (filtro.value === "") {
        outFiltro.innerHTML = '';
        filtro.focus();
        cabecalhoTabela.innerHTML = "";
    }
});

filtro.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        pesquisarArea();
    }
});

btPesquisar.addEventListener("click", pesquisarArea);

function pesquisarArea() {
    const cabecalhoTabela = document.getElementById("cabecalhoTabela");
    cabecalhoTabela.innerHTML = "";
    const cabecalho = `<tr><th>Safra</th><th>ID</th><th>Área (ha)</th><th>Sacas</th><th>Produtividade (sacas/ha)</th></tr>`;
    cabecalhoTabela.innerHTML = cabecalho;

    var opMaiuscula = filtro.value
    var flag = 0;
    outFiltro.innerHTML = "";

    frase2 = document.getElementById("titulo2")
    if (frase2) {
        frase2.remove();
    }

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
                
                var safra = document.createElement("td")
                var id = document.createElement("td")
                var hectares = document.createElement("td")
                var sacas = document.createElement("td")
                var produtividade = document.createElement("td")
                var tr = document.createElement("tr")

                safra.innerHTML = ano;
                id.innerHTML = opMaiuscula;
                hectares.innerHTML = vetSetor[0];
                sacas.innerHTML = vetProd[contadora];
                produtividade.innerHTML = vetDivisor[contadora].toFixed(2);

                tr.appendChild(safra);
                tr.appendChild(id);
                tr.appendChild(hectares);
                tr.appendChild(sacas);
                tr.appendChild(produtividade);
                outFiltro.appendChild(tr);

                contadora++;
                ano++;
            }
        }
    }

    if (flag == 0) {
        cabecalhoTabela.innerHTML = "";
        outFiltro.innerHTML = `Não existe essa área na fazenda!`;
    }
}

