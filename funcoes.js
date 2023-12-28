function imprimeTexto(texto) {
    console.log(texto);
}
 
imprimeTexto(soma(getRandomArbitrary(30, 80), getRandomArbitrary(1, 20)));
 
function soma(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero;
}

imprimeTexto(multiplicacao(getRandomArbitrary(30, 80), getRandomArbitrary(1, 20)));

function multiplicacao(primeiroNumero, segundoNumero) {
    return primeiroNumero * segundoNumero;
}

imprimeTexto(divisao(getRandomArbitrary(30, 80), getRandomArbitrary(1, 20)));

function divisao(primeiroNumero, segundoNumero) {
    return Math.round(primeiroNumero / segundoNumero);
}

imprimeTexto(subtracao(getRandomArbitrary(30, 80), getRandomArbitrary(1, 20)));

function subtracao(primeiroNumero, segundoNumero) {
    return primeiroNumero - segundoNumero;
}

 
function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const resultado = Math.floor(Math.random() * (max - min) + min);
    console.log("Valor Gerado: " + resultado);
    return resultado;
}
  

function nomeIdade(nome, idade) {
    return `my name is ${nome} and I have ${idade} years old`
  }
  
console.log(nomeIdade("Leandro dos Santos Moquiuti", calculoAnos(1989, 2023)))

function calculoAnos(nascimento, anoAtual) {
    return anoAtual - nascimento;
}


animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)


  