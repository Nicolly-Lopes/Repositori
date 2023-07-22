const cabecalhoTabela = document.getElementById("cabecalhoTabela");
var outFiltro = document.getElementById("outFiltro");
var outFiltroMensagem = document.getElementById("outFiltroMensagem");
const filtro = document.querySelector('.inBarraPesquisa');

// Botão de limpeza
filtro.addEventListener('input', function () {
    if (filtro.value === "") {
        outFiltro.innerHTML = '';
        outFiltroMensagem.innerHTML = '';
        filtro.focus();
        cabecalhoTabela.innerHTML = "";
    }
});

// atalho do botão
filtro.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        pesquisarArea();
    }
});

btPesquisar.addEventListener("click", pesquisarArea);

function pesquisarArea() {
    //Cria o cabeçalho da tabela
    var safraCabecalho = document.createElement("th");
    var idCabecalho = document.createElement("th");
    var hectaresCabecalho = document.createElement("th");
    var sacasCabecalho = document.createElement("th");
    var produtividadeCabecalho = document.createElement("th");
    var trCabecalho = document.createElement("tr");

    safraCabecalho.innerHTML = "Safra";
    idCabecalho.innerHTML = "ID";
    hectaresCabecalho.innerHTML = "Área (ha)";
    sacasCabecalho.innerHTML = "Sacas";
    produtividadeCabecalho.innerHTML = "Produtividade <br>Safra/ha";

    trCabecalho.appendChild(safraCabecalho);
    trCabecalho.appendChild(idCabecalho);
    trCabecalho.appendChild(hectaresCabecalho);
    trCabecalho.appendChild(sacasCabecalho);
    trCabecalho.appendChild(produtividadeCabecalho);
    cabecalhoTabela.appendChild(trCabecalho);


    var opMaiuscula = filtro.value
    var flag = 0;
    outFiltro.innerHTML = "";
    outFiltroMensagem.innerHTML = "";

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

                //Corpo da tabela
                var safra = document.createElement("td");
                var id = document.createElement("td");
                var hectares = document.createElement("td");
                var sacas = document.createElement("td");
                var produtividade = document.createElement("td");
                var tr = document.createElement("tr");

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
        outFiltroMensagem.innerHTML = `Não existe essa área na fazenda!`;
    }
}