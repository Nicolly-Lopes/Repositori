/*Descrição: Esta aplicação gerencia a produtividade de áreas de produção de café em uma fazenda ao longo de 10 safras. Com um filtro de safra, o usuário pode visualizar informações em uma tabela sobre as áreas e suas produções em cada safra. Além disso, é possível identificar as áreas com maior e menor produtividade na safra. A aplicação também permite que o usuário insira um valor para ver quais áreas tiveram a produção média menor que esse valor informado. Por fim, há um filtro de busca para exibir informações específicas da área pesquisada em todas as safras.

Tema: Gerenciamento das Áreas de Produção de uma Fazenda de Café

Versão: 1.0

Período de desenvolvimento: 21/06/2023 a 24/07/2023

Autores:Katiane Maciel do Nascimento, Rafael Capeletti Moráo e Nicolly Cerqueira Lopes Rozado*/


/// Refencia os termos do HTML
const cabecalhoTabela = document.getElementById("cabecalhoTabela");
var outFiltro = document.getElementById("outFiltro");
var outFiltroMensagem = document.getElementById("outFiltroMensagem");
const filtro = document.querySelector(".inBarraPesquisa");

// Botão de limpeza
filtro.addEventListener("input", function () {
  if (filtro.value === "") {
    outFiltro.innerHTML = "";
    outFiltroMensagem.innerHTML = "";
    filtro.focus();
    cabecalhoTabela.innerHTML = "";
  }
});

// se a tecla enter for clicada ele chama a funçao pesquisar aréa
filtro.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
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

  //adiciona os conteudos nas variaves
  safraCabecalho.innerHTML = "Safra";
  idCabecalho.innerHTML = "ID";
  hectaresCabecalho.innerHTML = "Área (ha)";
  sacasCabecalho.innerHTML = "Sacas";
  produtividadeCabecalho.innerHTML = "Produtividade <br>Safra/ha";

  //adiciona as variaveis nas linhas
  trCabecalho.appendChild(safraCabecalho);
  trCabecalho.appendChild(idCabecalho);
  trCabecalho.appendChild(hectaresCabecalho);
  trCabecalho.appendChild(sacasCabecalho);
  trCabecalho.appendChild(produtividadeCabecalho);
  cabecalhoTabela.appendChild(trCabecalho);

  //obtem o valor digitado no input com o iD "filtro" e trasforma em maiuscula
  var opMaiuscula = filtro.value;
  //variavel para controlar se foi encontrada a area pesquisada
  var flag = 0;
  //limpa o conteudo da div com ID "outFiltro"
  outFiltro.innerHTML = "";
  outFiltroMensagem.innerHTML = "";

  //quando selecionado um valor a frase é removida
  frase2 = document.getElementById("titulo2");
  if (frase2) {
    frase2.remove();
  }

  if (filtro.value == "") {
    alert("Você precisa digitar o nome de uma área!");
  } else {
    //vetor para armazenar os dados encotrados na pesquisa
    var vetSetor = [];
    var vetProd = [];
    var vetDivisor = [];
    var divisor = 0;
    var contadora = 0;
    var ano = 2014;

    // se encontrou a area adiciona os dados nos vetores correspondentes
    for (var ind = 0; ind < vetID.length; ind++) {
      if (vetID[ind] == opMaiuscula.toUpperCase()) {
        flag++;
        vetSetor.push(vetArea[ind]);
        vetProd.push(vetSacas[ind]);
        divisor = vetProd[contadora] / vetSetor[contadora];
        vetDivisor.push(divisor);

        // conteudo da tabela td-coluna,tr-linha
        var safra = document.createElement("td");
        var id = document.createElement("td");
        var hectares = document.createElement("td");
        var sacas = document.createElement("td");
        var produtividade = document.createElement("td");
        var tr = document.createElement("tr");

        //adiciona o conteudo das variaveis
        safra.innerHTML = ano;
        id.innerHTML = opMaiuscula;
        hectares.innerHTML = vetSetor[0];
        sacas.innerHTML = vetProd[contadora];
        produtividade.innerHTML = vetDivisor[contadora].toFixed(2);

        //adiciona o conteudo da variavel dentro da linha
        tr.appendChild(safra);
        tr.appendChild(id);
        tr.appendChild(hectares);
        tr.appendChild(sacas);
        tr.appendChild(produtividade);
        //adiciona a linha dentro da tabela
        outFiltro.appendChild(tr);
        //mostra a posiçao do vetor
        contadora++;
       //mostra que ano foi a safra
        ano++;
      }
    }
  }

   // Verifica se a área foi encontrada ou não e exibe a mensagem correspondente Se o flag for igual a zero é porque o usuário digitou o nome da área errado, por isso irá aparecer a mensagem “Não existe essa área na fazenda”;
  if (flag == 0) {
    cabecalhoTabela.innerHTML = "";
    outFiltroMensagem.innerHTML = `Não existe essa área na fazenda!`;
  }
}