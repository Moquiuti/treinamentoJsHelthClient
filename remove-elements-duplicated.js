const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

/**
 * Aqui estou utiizando duas ações.
 * primeiro crio um novo set com meu array recomendo os duplicados com o comando new Set(nomes), uma ótima forma de remover os duplicados
 * segundo com spread operator eu crio de fato um novo array.
 */
const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);