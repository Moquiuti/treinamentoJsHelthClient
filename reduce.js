const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

/**
 * usamos o acumulador, informamos o valor inicial dele no segundo parâmetro do reduce = 0 e vamos atualizando o valor do acumulador a cada iteração que fazemos na lista.
 * uma ótima forma de fazer a soma das notas para gerar a média por exemplo de uma sala de aula como no caso aqui aplicado.
 *  @param {*} notasDaSala 
 * @returns 
 */
const calculaMedia = (notasDaSala) => {
  const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);
  const media = somaDasNotas / notasDaSala.length;
  return media;
};

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);
