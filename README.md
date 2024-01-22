> Conceitos Estudados. 
* Que o computador consegue apenas armazenar valores em alguns tipos de variáveis, como números, texto e booleanos.
* Como declarar uma variável numérica, com tipo number, e associar um valor a ela, podendo ser um inteiro ou um valor de ponto flutuante.
* Como declarar uma variável de texto, conhecida como string, e colocar uma frase, número, pontuação ou uma mistura de todos esses dentro dela.
* Como declarar uma variável booleana e definir seu valor como verdadeiro (true) ou falso (false).
* Onde as booleanas mais aparecem, como resultados de comparações com === ou outros operadores de comparação como >=.

>---

* var tem um escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas em relação à lógica da aplicação.
* let e const têm escopo local, sendo assim, não podem ser acessadas em outros escopos, e const não pode ter seu valor alterado depois de definido.
* O JavaScript considera alguns valores como false durante comparações, como com null, undefined, 0, NaN e Strings vazias.
* null é usado quando não queremos dar um valor para uma variável, mas também não queremos deixá-lo como undefined (não definido).
* null é um objeto no JavaScript, diferente de undefined, que tem seu próprio tipo, e isso pode causar problemas se não tomarmos cuidado ao utilizá-lo.
* O JavaScript converte automaticamente entre tipos de valores, como números para texto e para booleanos, porém não é interessante deixá-lo fazer isso automaticamente, pois podem ocorrer erros.
* Temos como forçar uma mudança de tipo utilizando os métodos Number() e String(), onde Number() converte as variáveis para números ou NaN caso tenha algum erro na conversão, e String() converte as variáveis para texto.

>---

* As características principais do JavaScript, como ser uma linguagem interpretada e dinamicamente tipada.
* Que o NodeJS é um interpretador de JavaScript para backend, ou seja, não executa no navegador, mas sim no servidor.
* Como ler os erros que aparecem no console da aplicação, podendo usar um tradutor, como o Google Tradutor, para entender o que o erro está avisando.
* O que é stacktrace, também chamado de pilha, que nos auxilia a saber o que está acontecendo quando temos um erro, e onde ele se localiza.
* O que é o Console API e como podemos utilizá-lo usando o console.log() e console.error().
* Onde as mensagens do console devem aparecer dependendo do interpretador que estamos usando, sendo que para o NodeJS as mensagens são mostradas no terminal

>---

* A diferença entre fazer comparações com ==, em que o JavaScript faz conversão entre os tipos de variáveis antes de fazer a comparação, e ===, em que tanto o valor quanto o tipo da variável deve ser o mesmo.
* Como é escrito um operador ternário, com o qual fazemos uma comparação entre valores digitando um ?, seguido da possibilidade true, um : e a possibilidade false, ou seja, comparação ? true : false.
* O porquê do nome “operador ternário”, que se deve ao fato de termos 3 operadores juntos em uma única linha para desempenhar uma tarefa e devolver um resultado.
* O uso da template literal, que facilita a construção de strings que demandam concatenação (a operação em que se junta 2 strings), e foi introduzido no ES6.
* Como usar a template literal, escrevendo o texto entre acentos graves (`) e colocando as variáveis com ${variavel} para que o valor deles fique nessa posição.

>---

* O que são funções, pequenos trechos de código que podem ser executados uma ou mais vezes.
* As vantagens de se usar uma função, pois com elas conseguimos deixar o código mais curto e mais legível, facilitando a manutenção.
* Como retornar informações da função, utilizando o return, lembrando que o console.log() apenas mostra a informação no terminal e não para outras partes do código.
* A utilidade dos argumentos, já que com eles podemos passar variáveis para as funções poderem usar os valores.
* Que com o hoisting o JavaScript analisa todo o código procurando por variáveis declaradas com var e funções para trazer tais declarações para o início do código.
* Expressões de função, uma maneira diferente de montar funções usando variáveis do tipo const e chamando-as pelo nome. Lembrando que é necessário que o programa passe pela variável antes de podermos chamá-la, já que não há suporte à hoisting.
* Arrow function, uma função declarada de maneira mais compacta usando uma const. A arrow function também não tem suporte à hoisting.

>---

* Utilizar os métodos includes() e indexOf():
* O includes() retorna true ou false, dependendo se o valor passado como parâmetro está presente ou não no array. O indexOf() retorna a posição no array do valor passado como parâmetro. Utilizamos esses dois métodos em conjunto para primeiro verificar se um aluno estava presente em uma lista, e depois obter sua posição para buscar sua nota em outra lista.
* Desestruturar um array:
* Você aprendeu a sintaxe de desestruturação, disponível desde o ES6 (EcmaScript 6), que nos permite criar várias novas variáveis ao mesmo tempo a partir dos elementos de um array.
* Utilizar a estrutura for e entender seu funcionamento:
* O for é constituído de três expressões: criação da variável de controle; condição de execução; modificação da variável de controle. * * Essas três expressões juntas definem quantas vezes o bloco do for será executado.
* Utilizar a estrutura for of e entender a diferença em relação ao for:
* O for of sempre é utilizado para percorrer todos os elementos de um array, do início ao fim. Para esses casos, o for of é mais conciso que o for.

>---

* Como utilizar o forEach:
* Aprendemos mais uma forma de iterar sobre arrays, dessa vez com um método próprio deles. O forEach recebe uma função callback que será executada para cada item do array.
* Diferentes formas de utilizar funções callback:
* Podemos utilizar funções anônimas (como arrow functions) diretamente como funções callback, ou então criar funções de forma externa e utilizá-las no parâmetro.
* Como utilizar o map:
* O map também aceita funções callback, assim como o forEach, e é adequado para quando queremos "reescrever" os valores de um array, sem modificar o array original. Um novo array é criado com os valores reescritos.

>---

* Como utilizar o filter e o reduce:
* Aprendemos mais métodos modernos do JavaScript que nos ajudam em situações mais específicas. Utilizamos o filter para criar um array filtrado a partir de um existente e o reduce para acumular valores de um array em um só.
* Como clonar arrays com o spread operator ...:
* Entendemos o problema de referência do JavaScript ao tentar atribuir um array a um novo. Para resolver esse problema, utilizamos o spread operator para espalhar todos os valores de um array em um novo, realizando a clonagem com sucesso.
* Como utilizar a estrutura Set:
* Vimos como criar um Set a partir de um array existente, a fim de remover todas as suas duplicatas. Em seguida, utilizamos o spread operator para converter o Set de volta em um lista.

>---

* Que objeto é um tipo de dado que reflete uma abstração dos objetos da vida real;
* Que a estrutura de um objeto literal no JavaScript é composta por pares de chave: valor separados por vírgula, dentro de chaves { };
* Que para acessar dados em um objeto podemos usar as notações de ponto e de colchete;
* Que para adicionar e manipular dados em um objeto precisamos saber como acessar suas propriedades.

>---

* Que para manipular objetos literais podemos utilizar os métodos do JavaScript para cada tipo de dado;
* Que os valores em um objeto podem ser tipos primitivos (strings, números, booleanos e null), arrays ou outros objetos;
* Que além das propriedades, também podemos atribuir funções que dão comportamento a um objeto.

>---

* Como percorrer objetos a partir das chaves com for...in, iterando sobre as propriedades de um objeto como em um array;
* Que para extrair chaves e valores de objetos é possível utilizar métodos de Object;
* Que funções como .entries, .key e .value podem ser úteis na hora de trabalhar com objetos;
* Que o spread operator (ou sintaxe de espalhamento) pode ser uma opção para decompor objetos quando precisamos extraí-los de um array e formar um novo array.

>---

* O que é o formato JSON e por qual motivo o utilizamos, como por exemplo a transmissão de dados ou armazenamento de configurações;
* Qual a sintaxe do JSON e suas limitações, como não ter variáveis ou comentários;
* Como ler um arquivo .json no Node.js;
* Como utilizar as funções nativas do Node.js para manipular um JSON.

>---

* Que podemos utilizar os métodos de listas em conjunto com objetos;
* Como passamos os parâmetros e propriedades dos objetos para alguns métodos de listas;
* Vimos exemplos de como encontrar, filtrar e ordenar uma lista de objetos.

>---

* O que é a palavra-chave this e sua importância na manipulação de objetos com JavaScript, uma vez que o this representa o contexto em que determinada função ou método será executada, e como este contexto pode ser identificado e modificado utilizando os métodos bind(), * call() e apply();
* Como funciona a criação de objetos em JavaScript com o modelo de protótipo, que é a forma nativa do JavaScript trabalhar com o conceito de orientação a objetos conhecido como “herança”, quando objetos recebem propriedades e métodos de outros;
* Como acessar as propriedades prototype e __proto__ e, através delas, identificar a cadeia de protótipos desde o nível mais baixo, normalmente um objeto do próprio tipo de dado, como Object ou Function;
* As duas formas (anteriores às classes) que o JavaScript utiliza para criação de objetos a partir de modelos: Object.create() e funções construtoras com new; sendo o primeiro mais indicado para se trabalhar com protótipos utilizando as melhores práticas e o segundo mais próximo à sintaxe de classes.