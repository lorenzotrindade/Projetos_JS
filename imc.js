const nome = document.getElementById("nome").value;
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");

const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

function imc(){
    if ( nome !== '' && altura !== '' && peso !== '') {
         
      const valorIMC = (peso/(altura * altura ));

      resultado.textContent = valorIMC;
    
    } else {
    resultado.textContent =  'Preencha todos os campos'
  }

    




}





// #quando houver o evento de click vc irá executar essa função aqui
calcular.addEventListener('click', imc);