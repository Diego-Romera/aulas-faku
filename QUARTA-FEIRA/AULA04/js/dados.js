/* *************************************************************************************
* Objetivo: Manipular elementos HTML pelo JavaScript
* Autor: Diego
* Data: 08/03/2023
* Versão: 1.0
****************************************************************************************/
 //Recebe a div para colocar a tabela
 var div = document.getElementById('listaDeNomes');

 //Cria os elementos table, tr e td para criar a tabela
 var tabela = document.createElement('table');


//Criamos um objeto que recebe todas as caracteristicas do botão
var botaoTabela = document.getElementById('tabela');
var botaoCriarItens = document.getElementById("criar");

// const criarElementos = function(){  
//     //Recebe o nome digitado dentro da caixa de testo
//     let nome =document.getElementById('nome').value;
    
//     //Cria objeto que recebe todas as caracteristicas da div
//     let div = document.getElementById('listaDeNomes');

//     //createElement - permite criar pelo JS uma tag HTML
//     let ulNomes = document.createElement('ul');
//     let liNomes = document.createElement('li');
//     let nomeItem = document.createTextNode(nome);

//     //Associando a ul a div de nomes
//     div.appendChild(ulNomes);

//     //appendChild - permite associar um elemento
//     //filho ao elemento pai
//     ulNomes.appendChild(liNomes);

//     liNomes.appendChild(nomeItem);
// };

//Cria a tabela e sua estrutura de cabeçalho


/* Cria atabela principal com a linha dos titulos (nome e telefone) */
const criarTabela = function(){
   
    let linhaTitulo = document.createElement('tr');
    let colunaNome = document.createElement('td');
    let colunaTelefone = document.createElement('td');

    //Cria dois objetos de texto para serem colocados nas celulas
    let tituloNome = document.createTextNode('Nome');
    let tituloTelefone = document.createTextNode('Telefone');

    //Associando os elementos filhos aos elementos pais
    div.appendChild(tabela);//<table>
    tabela.appendChild(linhaTitulo);//<tr>
    linhaTitulo.appendChild(colunaNome);//<td>
    linhaTitulo.appendChild(colunaTelefone);

    //Associando os objetos de textos
    colunaNome.appendChild(tituloNome);
    colunaTelefone.appendChild(tituloTelefone);

};

/* Cria os itens dentro da tabela já exixtente */
const criarItensTabela = function(){

    //Recebe a entradas de dados realizada pelo usuário
    let entradaNome = document.getElementById("nome").value;
    let entradaTelefone = document.getElementById("telefone").value;

    // Cria uma linha (tr) e duas colunas (td)
    let linhaItem = document.createElement("tr");
    let colunaItemNome = document.createElement("td");
    let colunaItemTelefone = document.createElement("td");

    // Cria dois objetos de texto para escrever o que foi digitado pelo usuário
    let textoNome = document.createTextNode(entradaNome);
    let textoTelefone = document.createTextNode(entradaTelefone);

    //Acrescebta a nova linha(tr) na tabela principal
    tabela.appendChild(linhaItem);

    //Acrescenta as duas novas (td) dentro da (tr) anterior
    linhaItem.appendChild(colunaItemNome);
    linhaItem.appendChild(colunaItemTelefone);

    //
    colunaItemNome.appendChild(textoNome);
    colunaItemTelefone.appendChild(textoTelefone);


    
};

//Cria um evento de escuta para o botão utilizando a ação click
botaoTabela.addEventListener('click', function(){criarTabela();})
botaoCriarItens.addEventListener('click', function(){criarItensTabela();})