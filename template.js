const nome = "Leandro";
const idade = 34;
const cidadeDeNascimento = "Campo Grande-MS";
// const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;

const apresentacao = `meu nome é ${ nome }, minha idade é ${ idade } e nasci na cidade de ${ cidadeDeNascimento }`;

console.log(apresentacao)

a = []
b = 20
c = true 
d = ''

//A variável b possui o mesmo valor e o mesmo tipo e a primeira comparação é verdadeira. Como o valor armazenado na variável c é true e a comparação diz que c não é falso, o resultado também é verdadeiro. Na última comparação, o valor de d, que é uma string vazia é comparado com 0 e isso também é verdadeiro. Sendo assim, saída do console será Verdade.
if (b === 20 && c != false && d == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

//O valor de uma lista vazia é zero, e ao comparar com um número, temos 0 == 0 resultando true.
if (a == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

//Uma string vazia no JavaScript é considerada false.
if (d) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

//Quando comparamos 20 do tipo inteiro com '20' do tipo string com o operador == (igual, igual), apenas os valores das variáveis são comparados, resultando no valor true.
if (b == '20') {
    console.log('Verdade')
} else {
    console.log('Falso')
}

const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)