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
console.log(notas);
console.log(notasAtualizadas);