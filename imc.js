const nome = document.getElementById("nome").value;
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");

const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

function imc(){
    if (nome.value == '') {
        alert("No name");
    
    } else {
    alert("Nome preenchido: " + nome.value);
  }

    




}





// #quando houver o evento de click vc irá executar essa função aqui
calcular.addEventListener('click', imc);