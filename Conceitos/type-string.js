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

const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)
console.log(null == undefined); // true
console.log(null === undefined); // false

const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 10;
console.log(operacao);


/**Que o computador consegue apenas armazenar valores em alguns tipos de variáveis, como números, texto e booleanos.
Como declarar uma variável numérica, com tipo number, e associar um valor a ela, podendo ser um inteiro ou um valor de ponto flutuante.
Como declarar uma variável de texto, conhecida como string, e colocar uma frase, número, pontuação ou uma mistura de todos esses dentro dela.
Como declarar uma variável booleana e definir seu valor como verdadeiro (true) ou falso (false).
Onde as booleanas mais aparecem, como resultados de comparações com === ou outros operadores de comparação como >=.**/