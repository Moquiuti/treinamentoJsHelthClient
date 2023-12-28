const impressao = function(texto){console.log(texto)};
const soma = function(num1, num2){return num1+num2};
impressao('Resultado da Soma é: ' + soma(getRandomArbitrary(1,10),getRandomArbitrary(11,20)))
const subtracao = function(num1, num2){return num1-num2};
impressao('Resultado da Subtração é: ' + subtracao(getRandomArbitrary(1,10),getRandomArbitrary(11,20)))
const multiplicacao = function(num1, num2){return num1*num2};
impressao('Resultado da Multiplicação é: ' + multiplicacao(getRandomArbitrary(1,10),getRandomArbitrary(11,20)))
const divisao = function(num1, num2){return Math.round(num1/num2)};
impressao('Resultado da Divisão arrendodado é: ' + divisao(getRandomArbitrary(100,200),getRandomArbitrary(11,20)))
const calculoAnos = function(nascimento, anoAtual) {return anoAtual - nascimento};
const apresentacao = function(nome,idade){impressao(`my name is ${nome} and I have ${idade} years old`)};
apresentacao("Leandro dos Santos Moquiuti Ferreira", calculoAnos(1989, 2023));


function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const resultado = Math.floor(Math.random() * (max - min) + min);
    console.log("Valor Gerado: " + resultado);
    return resultado;
}


  