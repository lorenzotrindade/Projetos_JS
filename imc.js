

const calcular = document.getElementById("calcular");


function imc(){
      const nome = document.getElementById("nome").value;
      const peso = document.getElementById("peso").value;
      const altura = document.getElementById("altura").value;
      /*colcoando o ponto valuie aqui indicoquie quero o valor da caixas */ 
      const resultado = document.getElementById("resultado");

if (nome !== '' && altura !== '' && peso !== '') {
    console.log("Todas as variáveis estão preenchidas");
} else {
    console.log("Alguma variável está vazia");
}

    




}





// #quando houver o evento de click vc irá executar essa função aqui
calcular.addEventListener('click', imc);