const getRandomArbitrary = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const resultado = Math.floor(Math.random() * (max - min) + min);
    return resultado;
};

const notas = [getRandomArbitrary(0,10), getRandomArbitrary(0,10), getRandomArbitrary(0,10), getRandomArbitrary(0,10), getRandomArbitrary(0,10), getRandomArbitrary(0,10), getRandomArbitrary(0,10), getRandomArbitrary(0,10),];

/**
 * O map() também é uma estrutura de repetição do JS, ele vai executar essa função callback para cada uma das notas e para cada uma vai atribuir um novo valor.
 * O map() é muito apropriado para reescrever arrays 
 * O array não foi modificado, isso já denuncia para nós que o map() não altera o array original. 
 * Teremos que atribuir o retorno do map() para um novo array.
 * */
const notasAtualizadas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1;
});

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

/**
 * A diferença entre map e foreach é que... 
 * map retorna um novo array com os elementos transformados por uma função, enquanto 
 * foreach não retorna nada e apenas executa uma ação para cada elemento. 
 * map é usado para transformar uma coleção de elementos, enquanto 
 * foreach é usado para aplicar uma operação com efeitos em cada elemento.
 */
console.log(nomesPadronizados);
console.log(notas);
console.log(notasAtualizadas);