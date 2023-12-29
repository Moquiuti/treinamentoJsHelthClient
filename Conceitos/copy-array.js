const notas = [7, 7, 8, 9];

/**
 * Utiliza-se essa forma de copia de array, sem utilizar a mesma referência. É um padrão do JavaScript,
 * posso inclusive adicionar um valor no começo da lista, basta colocar o valor e adicionar a vírgula antes do redicências.
 */
const novasNotas = [...notas, 10];

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);