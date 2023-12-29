const clients = require("./clients.json");

/**
 * encontrar um determinado objeto dentro da nossa lista de objetos.
 * @param {*} lista 
 * @param {*} chave 
 * @param {*} valor 
 * @returns 
 */
const result = (lista, chave, valor) => lista.find((item) => item[chave].includes(valor));
/**
 * Encontrar os clientes que moram em apartamentos, porém que não adicionaram complemento de endereço
 * @param {*} clientes 
 * @returns 
 */
const filtrarApartamentoSemComplemento = (clientes) => {
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

//console.log(result(clients, "nome", "Kirby"));
//console.log(result(clients, "telefone", "1918820860"));
console.log(filtrarApartamentoSemComplemento(clients));

