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
    address: [
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
    ],
};

/**
 * Ferramentas que podemos usar para verificar as chaves, campos e valores de um objeto.
 */
for (let chave in client) {
    let tipo = typeof client[chave];
    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${client[chave]}`);
    }
}

/**
 * Outras ferramentas que podemos usar para verificar as chaves, campos e valores de um objeto.
 */
const chavesDoObjeto = Object.keys(client);
console.log(chavesDoObjeto);

/**
 * Verificando se a chave endereços possuí valores, caso contrário será printado um erro, dizendo ser obrigatório possuir um endereço.
 */
if (!chavesDoObjeto.includes("address")) {
    console.error("Erro. É necessário ter um endereço cadastrado.");
}