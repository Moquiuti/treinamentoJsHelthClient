const clients = require("./clients.json");

/**
 * encontrar um determinado objeto dentro da nossa lista de objetos.
 * @param {*} lista 
 * @param {*} chave 
 * @param {*} valor 
 * @returns 
 */
const result = (lista, chave, valor) => lista.find((item) => item[chave].includes(valor));

//console.log(result(clients, "nome", "Kirby"));
console.log(result(clients, "telefone", "1918820860"));

