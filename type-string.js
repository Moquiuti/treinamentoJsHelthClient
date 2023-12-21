const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const StringDeNumeros = "34567";

const citacao = "Meu nome é ";
const meuNome = "Leandro dos Santos Moquiuti";

// concatenação (+)
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


console.log(citacao + meuNome)

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false
//o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.
const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres
