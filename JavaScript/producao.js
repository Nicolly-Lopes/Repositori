/*Descrição: Esta aplicação gerencia a produtividade de áreas de produção de café em uma fazenda ao longo de 10 safras. Com um filtro de safra, o usuário pode visualizar informações em uma tabela sobre as áreas e suas produções em cada safra. Além disso, é possível identificar as áreas com maior e menor produtividade na safra. A aplicação também permite que o usuário insira um valor para ver quais áreas tiveram a produção média menor que esse valor informado. Por fim, há um filtro de busca para exibir informações específicas da área pesquisada em todas as safras.

Tema: Gerenciamento das Áreas de Produção de uma Fazenda de Café

Versão: 1.0

Período de desenvolvimento: 21/06/2023 a 24/07/2023

Autores: Davi dos Reis, Franklin Gonçalves de Andrade, Katiane Maciel do Nascimento, Rafael Capeletti Moráo e Nicolly Cerqueira Lopes Rozado*/


//-----------------------------------código para ocultar e deixar as páginas visíveis---------------------------------------------------------
// Referência o elemento select

const select = document.getElementById("select");
const pagProducao = document.getElementById("pagProducao");
const pagMaiorProd = document.getElementById("pagMaiorProd");
const pagMediaProd = document.getElementById("pagMediaProd");
const pagMenorProd = document.getElementById("pagMenorProd");
const pagFiltro = document.getElementById("pagFiltro");  //

//Recebe o valor de 1, pois a primeira página a aparecer é a com id=conteudo-1
var conteudoAtual = 1;

//Essa função é acionada quando o usuário clica no link
function mostrarConteudo(conteudoId) {

    //Oculta a página atual
    var divAtual = document.getElementById("conteudo-" + conteudoAtual);
    divAtual.style.display = "none";

    //Deixa a página selecionada visível
    var divSelecionada = document.getElementById("conteudo-" + conteudoId);
    divSelecionada.style.display = "block";

    //Se a página selecionada for a 5, deve-se ocultar o elemento select
    if (conteudoId == 5) {
        select.style.display = "none";
    } else {
        select.style.display = "block";
    }

    conteudoAtual = conteudoId;

    // Muda a cor da palavra na barra de navegação dependendo em qual página om usuário está utulizando
    switch (conteudoId) {
        case 1:
            pagProducao.style.color = "chocolate";
            pagMaiorProd.style.color = "white";
            pagMediaProd.style.color = "white";
            pagMenorProd.style.color = "white";
            pagFiltro.style.color = "white";
            break;

        case 2:

            pagMaiorProd.style.color = "chocolate";
            pagProducao.style.color = "white";
            pagMediaProd.style.color = "white";
            pagMenorProd.style.color = "white";
            pagFiltro.style.color = "white";
            break;
        case 3:
            pagMediaProd.style.color = "chocolate";
            pagProducao.style.color = "white";
            pagMaiorProd.style.color = "white";
            pagMenorProd.style.color = "white";
            pagFiltro.style.color = "white";
            break;

        case 4:
            pagMenorProd.style.color = "chocolate";
            pagProducao.style.color = "white";
            pagMaiorProd.style.color = "white";
            pagMediaProd.style.color = "white";
            pagFiltro.style.color = "white";
            break;

        case 5:
            pagFiltro.style.color = "chocolate";
            pagProducao.style.color = "white";
            pagMaiorProd.style.color = "white";
            pagMediaProd.style.color = "white";
            pagMenorProd.style.color = "white";
            break;

    }
}

//Exibir conteúdo da primeira div quando a página carregar
window.onload = function () {
    var divInicial = document.getElementById("conteudo-1");
    divInicial.style.display = "block";
}

//----------------------------------conteúdo do site------------------------------------------------------------------------

// Refenciando os termos do HTML
const sltSafra = document.getElementById("sltSafra");
const divSafra = document.getElementById("divSafra");
const inMedia = document.getElementById("inMedia");
const btMostrar = document.getElementById("btMostrar");
const outMenorMedia = document.getElementById("outMenorMedia");
const btMenorProd = document.getElementById("btMenorProd");
const outMenorProd = document.getElementById("outMenorProd");
const btMaiorProd = document.getElementById("btMaiorProd");
const outMaiorProd = document.getElementById("outMaiorProd");

// Criando vetores globais
var vetMedia = [];

var vetIDAux = ["A15", "A22", "A74", "L87", "M16", "O47", "R40", "R72", "S96", "V49"];

// function que mostra a determinada safra das áreas
sltSafra.addEventListener("change", identificar);
function identificar() {
    // remoção da frase de explicação
    var frase = document.getElementById("titulo");
    if (frase) {
        frase.remove();
    }

    //referência a tabela e cria o cabeçalho
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";

    //Cria o cabeçalho da tabela
    var idThead = document.createElement("th");
    var hectaresThead = document.createElement("th");
    var sacasThead = document.createElement("th");
    var produtividadeThead = document.createElement("th");
    var linhaCabecalho = document.createElement("tr");
    var cabecalho = document.createElement("thead");

    //adiciona os conteudos nas variaves
    idThead.innerHTML = "ID";
    hectaresThead.innerHTML = "Área (ha)";
    sacasThead.innerHTML = "Sacas";
    produtividadeThead.innerHTML = "Produtividade <br>Safra/ha";

    //adiciona as variaveis nas linhas
    linhaCabecalho.appendChild(idThead);
    linhaCabecalho.appendChild(hectaresThead);
    linhaCabecalho.appendChild(sacasThead);
    linhaCabecalho.appendChild(produtividadeThead);
    cabecalho.appendChild(linhaCabecalho);
    tabela.appendChild(cabecalho);

    // Limpa os campos de saída das demais functions
    outMenorMedia.innerHTML = "";
    outMenorProd.innerHTML = "";
    outMaiorProd.innerHTML = "";
    inMedia.value = "";

    // Cria vetores, variáveis limpa o vetor global vetMedia
    var vetSacaAux = [];
    var vetAreaVazio = []
    vetMedia = [];
    var safra = Number(sltSafra.value);
    var contadora = 0;

    // Organização dos vetores Auxiliares através do percorrimento dos vetores principais
    for (var indAux = 0; indAux < vetIDAux.length; indAux++) {
        for (var ind = 0; ind < vetArea.length; ind++) {
            if (vetIDAux[indAux] == vetID[ind]) {
                vetAreaVazio.push(vetArea[ind]);
                vetSacaAux.push(vetSacas[ind]);
            }
        }
    }

    // Ordenação da media de produção de acordo com a safra
    for (var ind = safra; ind < vetSacaAux.length; ind += 10) {
        mediaProducao = vetSacaAux[contadora] / vetAreaVazio[ind];
        vetMedia.push(mediaProducao);

        // conteudo da tabela td-coluna,tr-linha
        var idCorpoTab = document.createElement("td");
        var hectaresCorpoTab = document.createElement("td");
        var sacasCorpoTab = document.createElement("td");
        var produtividadeCorpoTab = document.createElement("td");
        var linhaTabela = document.createElement("tr");
        var corpoTab = document.createElement("tbody");

        //adiciona o conteudo das variaveis
        idCorpoTab.innerHTML = vetIDAux[contadora];
        hectaresCorpoTab.innerHTML = vetAreaVazio[ind];
        sacasCorpoTab.innerHTML = vetSacaAux[ind];
        produtividadeCorpoTab.innerHTML = mediaProducao.toFixed(2);

        //adiciona o conteudo da variavel dentro da linha
        linhaTabela.appendChild(idCorpoTab);
        linhaTabela.appendChild(hectaresCorpoTab);
        linhaTabela.appendChild(sacasCorpoTab);
        linhaTabela.appendChild(produtividadeCorpoTab);
        corpoTab.appendChild(linhaTabela);
        tabela.appendChild(corpoTab);

        contadora++;
    }
}

// function para verificar a menor produção da safra
btMenorProd.addEventListener("click", menorProd);
function menorProd() {
    if (sltSafra.value == "") {
        alert("Você precisa selecionar uma safra!");
    } else {
        // Verificação para conferir se o campo foi preenchido
        var indMenor = 0;

        // estrutura de repetição responsável por percorrer o vetor
        for (var ind = 1; ind < vetMedia.length; ind++) {
            if (vetMedia[ind] < vetMedia[indMenor]) {
                indMenor = ind;
            }
        }
        // Exição da mensagem ao usuário
        outMenorProd.innerHTML = ` ${vetIDAux[indMenor]} com ${vetMedia[indMenor].toFixed(2)} sacas/ha`;
    }
}

// function para verificar a maior produção da safra
btMaiorProd.addEventListener("click", maiorProd);
function maiorProd() {


    // Verificação para conferir se o campo foi preenchido
    if (sltSafra.value == "") {
        alert("Você precisa selecionar uma safra!");
    } else {

        // variável responsável por armazenar o maior resultado encontrado
        var indMaior = 0;

        // estrutura de repetição responsável por percorrer o vetor
        for (var ind = 1; ind < vetMedia.length; ind++) {
            if (vetMedia[ind] > vetMedia[indMaior]) {
                indMaior = ind;
            }
        }

        // Exição da mensagem ao usuário
        outMaiorProd.innerHTML = ` ${vetIDAux[indMaior]} com ${vetMedia[indMaior].toFixed(2)} sacas/ha`;
    }
}

// function para verificar quais áreas de produção menor que a informada pelo usuário da safra
btMostrar.addEventListener("click", mostrarMedia);
function mostrarMedia() {
    // var responsável por armazenar o valor informado pelo usuário
    var media = inMedia.value;

    // Verificação dos campos
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

        // estrutura de repetição responsável por percorrer o vetor
        for (var i = 0; i < vetMedia.length; i++) {
            // estrutura condicional para filtrar os valores
            if (media > vetMedia[i]) {
                outMenorMedia.innerHTML += `${virgula} ${vetIDAux[i]}`
                flag++;
                virgula = ", ";
            }
        }
        // estrutura condicional verificando se houve alguma alteração no flag
        if (flag == 0) {
            outMenorMedia.innerHTML = `Nenhuma das áreas atingiram produção menor que a informada`
        }

    }
}

