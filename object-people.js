const client = {
    firtsName: "Leandro",
    lastsName: "Moquiuti",
    age: 34,
    cpf: "10293847561",
    email: "leandro@dominio.com",
    telefone: ["+55 (67) 9 9999-9999", "+55 (67) 9 8888-7777"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    },
};

console.log(
    `The name of client is ${client["firtsName"]} and has ${client["age"]} yeas old.`
);

const chaves = ["firtsName", "age", "cpf", "email", "height"];

chaves.forEach((chave) => {
    console.log(`The key ${chave} has value ${client[chave]}`);
});
console.log("_____________")
/**
 * é possível criar propriedades ao objeto após o mesmo ter sido criado
 */
client.height = "1.76"
chaves.forEach((chave) => {
    console.log(`The key ${chave} has value ${client[chave]}`);
});
console.log("_____________")
/**
 * Removendo uma propriedade
 */
delete client.height

console.log(client.height) //undefined

/**
 * Criando um objeto aninhado
 */
//client.endereco = {
//    rua: "R. Joseph Climber",
//    numero: 1337,
//    apartamento: true,
//    complemento: "ap 934",
//};
//
//console.log(client)
client.address = [
    {
        street: "R. Joseph Climber",
        number: 1337,
        apartment: true,
        complement: "ap 934",
        shipping: true,
        business: true
    },
    {
        street: "R. Pedre di Lari",
        number: 188,
        apartment: false,
        complement: "Casa Térrea",
        shipping: false,
        business: false
    },
    {
        street: "R. Marginal Luís Inácio Lula Ladrão",
        number: 151,
        apartment: false,
        complement: "Carandiru",
        shipping: false,
        business: false
    }
];

/**
 * Apresentando um excelente benefício de trabalhar com uma lista de objetos por exemplo, onde
 * pode-se aplicar filtros inteligentes para geração de relatório como no exemplo, onde só me interessa
 * os endereço que são apartamentos....
 */

const listaApenasApartamentos = client.address.filter(
    (address) => address.apartment === true
);

console.log(listaApenasApartamentos);

/**
 * Testando a criação de funções dentro objeto e utilizando a mesma
 */
client.efetuaPagamento(250);
client.efetuaPagamento(25);