const client = require("./client.json");
const lutador = require("./warrior.json");

/**
 * Verificando o que foi rebcedido
 * Que não é apenas uma string bem formatada, mas realmente um objeto
 * 
 */
console.log(typeof client);
console.log(client);

/**
 * Trabalhando com o arquivo guerreiro
 */
console.log(lutador.altura);

/**
 * Transformando um objeto em String, muito importante para enviar por exemplo conforme necessário
 */
const lutadorEmString = JSON.stringify(lutador);
console.log(lutadorEmString);

/**
 * Agora, quando eu recebo essa string e quero fazer o cast para um objeto eu uso outra anotação.
 */
const lutadorEmObjeto = JSON.parse(lutadorEmString);
console.log(lutadorEmObjeto);