//-----------------------------------código para ocultar e deixar as páginas visíveis---------------------------------------------------------
const select = document.getElementById("select");

var conteudoAtual = 1;

function mostrarConteudo(conteudoId) {
    var divAtual = document.getElementById("conteudo-" + conteudoAtual);
    divAtual.style.display = "none";

    var divSelecionada = document.getElementById("conteudo-" + conteudoId);
    divSelecionada.style.display = "block";

    if (conteudoId == 5) {
        select.style.display = "none";
    } else {
        select.style.display = "block";
    }

    conteudoAtual = conteudoId;
}

//Exibir conteúdo da primeira div quando a página carregar
window.onload = function () {
    var divInicial = document.getElementById("conteudo-1");
    divInicial.style.display = "block";
}




//----------------------------------conteúdo do site------------------------------------------------------------------------
const sltSafra = document.getElementById("sltSafra");
const divSafra = document.getElementById("divSafra");
const inMedia = document.getElementById("inMedia");
const btMostrar = document.getElementById("btMostrar");
const outMenorMedia = document.getElementById("outMenorMedia");
const btMenorProd = document.getElementById("btMenorProd");
const outMenorProd = document.getElementById("outMenorProd");
const btMaiorProd = document.getElementById("btMaiorProd");
const outMaiorProd = document.getElementById("outMaiorProd");



var vetMedia = [];

var vetID = ['R72', 'A15', 'R40', 'S96', 'A22', 'A74', 'M16', 'A15', 'M16', 'A15', 'M16', 'O47', 'R40', 'S96', 'A74', 'S96', 'A15', 'L87', 'O47', 'S96', 'V49', 'V49', 'V49', 'A74', 'R40', 'A74', 'R72', 'O47', 'S96', 'V49', 'R72', 'M16', 'A22', 'M16', 'M16', 'R72', 'A15', 'R72', 'A22', 'A74', 'S96', 'A22', 'V49', 'A22', 'A22', 'A22', 'O47', 'A15', 'A74', 'V49', 'A22', 'S96', 'M16', 'A74', 'R40', 'L87', 'A22', 'R40', 'L87', 'L87', 'A15', 'L87', 'O47', 'R72', 'L87', 'R72', 'V49', 'A15', 'R40', 'O47', 'M16', 'V49', 'O47', 'L87', 'R40', 'M16', 'M16', 'L87', 'A22', 'S96', 'R40', 'A74', 'A15', 'R72', 'A74', 'O47', 'R72', 'L87', 'V49', 'V49', 'S96', 'O47', 'R40', 'R72', 'R40', 'A74', 'S96', 'A15', 'L87', 'O47'];

var vetArea = [100, 50, 80, 70, 60, 90, 120, 50, 120, 50, 120, 110, 80, 70, 90, 70, 50, 75, 110, 70, 95, 95, 95, 90, 80, 90, 100, 110, 70, 95, 100, 120, 60, 120, 120, 100, 50, 100, 60, 90, 70, 60, 95, 60, 60, 60, 110, 50, 90, 95, 60, 70, 120, 90, 80, 75, 60, 80, 75, 75, 50, 75, 110, 100, 75, 100, 95, 50, 80, 110, 120, 95, 110, 75, 80, 120, 120, 75, 60, 70, 80, 90, 50, 100, 90, 110, 100, 75, 95, 95, 70, 110, 80, 100, 80, 90, 70, 50, 75, 110];

var vetSacas = [3002, 1472, 2366, 2002, 1865, 2610, 3662, 1587, 3517, 1519, 3662, 3380, 2383, 2184, 2792, 2129, 1506, 2223, 3317, 2024, 2779, 2838, 2775, 2701, 2303, 2787, 3067, 3217, 2075, 2772, 2957, 3578, 1773, 3537, 3517, 2906, 1447, 2989, 1815, 2740, 2179, 1721, 2908, 1733, 1784, 1852, 3280, 1434, 2606, 2818, 1744, 2025, 3668, 2714, 2462, 2168, 1700, 2477, 2336, 2285, 1564, 2292, 3285, 2981, 2231, 3026, 2767, 1529, 2454, 3335, 3511, 2924, 3399, 2195, 2373, 3683, 3652, 2215, 1808, 2136, 2500, 2778, 1463, 3098, 2773, 3328, 3077, 2349, 2939, 2838, 2089, 3382, 2416, 2907, 2461, 2678, 2111, 1511, 2346, 3264];

var vetIDAux = ["A15", "A22", "A74", "L87", "M16", "O47", "R40", "R72", "S96", "V49"];


sltSafra.addEventListener("change", identificar);
function identificar() {
    var frase = document.getElementById("titulo");
    if (frase) {
        frase.remove();
    }

    //referência a tabela
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";

    //Cria o cabeçalho da tabela
    var idThead = document.createElement("th");
    var hectaresThead = document.createElement("th");
    var sacasThead = document.createElement("th");
    var produtividadeThead = document.createElement("th");
    var linhaCabecalho = document.createElement("tr");
    var cabecalho = document.createElement("thead");

    idThead.innerHTML = "ID";
    hectaresThead.innerHTML = "Área (ha)";
    sacasThead.innerHTML = "Sacas";
    produtividadeThead.innerHTML = "Produtividade <br>Safra/ha";

    linhaCabecalho.appendChild(idThead);
    linhaCabecalho.appendChild(hectaresThead);
    linhaCabecalho.appendChild(sacasThead);
    linhaCabecalho.appendChild(produtividadeThead);
    cabecalho.appendChild(linhaCabecalho);
    tabela.appendChild(cabecalho);

    outMenorMedia.innerHTML = "";
    outMenorProd.innerHTML = "";
    outMaiorProd.innerHTML = "";
    inMedia.value = "";

    var vetSacaAux = [];
    var vetAreaVazio = []
    vetMedia = [];

    var safra = Number(sltSafra.value);
    var soma = 0;

    for (var indAux = 0; indAux < vetIDAux.length; indAux++) {
        for (var ind = 0; ind < vetArea.length; ind++) {
            if (vetIDAux[indAux] == vetID[ind]) {
                vetAreaVazio.push(vetArea[ind]);
                vetSacaAux.push(vetSacas[ind]);
            }
        }
    }

    for (var contadora = safra; contadora < vetSacaAux.length; contadora += 10) {
        mediaProducao = vetSacaAux[contadora] / vetAreaVazio[contadora];
        vetMedia.push(mediaProducao);

        //cria o corpo da tabela
        var idCorpo = document.createElement("td");
        var hectaresCorpo = document.createElement("td");
        var sacasCorpo = document.createElement("td");
        var produtividadeCorpo = document.createElement("td");
        var linhaTabela = document.createElement("tr");
        var corpo = document.createElement("tbody");

        idCorpo.innerHTML = vetIDAux[soma];
        hectaresCorpo.innerHTML = vetAreaVazio[contadora];
        sacasCorpo.innerHTML = vetSacaAux[contadora];
        produtividadeCorpo.innerHTML = mediaProducao.toFixed(2);

        linhaTabela.appendChild(idCorpo);
        linhaTabela.appendChild(hectaresCorpo);
        linhaTabela.appendChild(sacasCorpo);
        linhaTabela.appendChild(produtividadeCorpo);
        corpo.appendChild(linhaTabela);
        tabela.appendChild(corpo);

        soma++;
    }
}


btMenorProd.addEventListener("click", menorProd);
function menorProd() {
    if (sltSafra.value == "") {
        alert("Você precisa selecionar uma safra!");
    } else {

        var indMenor = 0;

        for (var ind = 1; ind < vetMedia.length; ind++) {
            if (vetMedia[ind] < vetMedia[indMenor]) {
                indMenor = ind;
            }
        }
        outMenorProd.innerHTML = ` ${vetIDAux[indMenor]} com ${vetMedia[indMenor].toFixed(2)} sacas/ha`;
    }

}

btMaiorProd.addEventListener("click", maiorProd);
function maiorProd() {
    if (sltSafra.value == "") {
        alert("Você precisa selecionar uma safra!");
    } else {
        var indMaior = 0;

        for (var ind = 1; ind < vetMedia.length; ind++) {
            if (vetMedia[ind] > vetMedia[indMaior]) {
                indMaior = ind;
            }
        }
        outMaiorProd.innerHTML = ` ${vetIDAux[indMaior]} com ${vetMedia[indMaior].toFixed(2)} sacas/ha`;
    }
}


btMostrar.addEventListener("click", mostrarMedia);
function mostrarMedia() {
    var media = inMedia.value;

    if (inMedia.value == "") {
        alert("Por favor, digite uma média para continuar a busca!");
        inMedia.focus();
    } else if (media < 0) {
        alert("A média não pode ter um valor negativo!");
        inMedia.focus();
        inMedia.value = "";
    } else if (sltSafra.value == "") {
        alert("Você precisa selecionar uma safra antes de continuar com a busca!");
    } else {
        var virgula = "";
        var flag = 0;

        outMenorMedia.innerHTML = `Áreas menores que ${media} sacas/ha: `;

        for (var i = 0; i < vetMedia.length; i++) {
            if (media > vetMedia[i]) {
                outMenorMedia.innerHTML += `${virgula} ${vetIDAux[i]}`
                flag++;
                virgula = ", ";
            }
        }
        if (flag == 0) {
            outMenorMedia.innerHTML += `Nenhuma das áreas atingiram produção menor que a informada`
        }

    }
}

