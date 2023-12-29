const client = {
    firtsName: "Leandro",
    lastsName: "Moquiuti",
    role: "student",
    cpf: "10293847561",
    ativo: true,
    email: "leandro@dominio.com",
    exibirInfos: function () {
        console.log(`O nome do aluno é: ${this.firtsName}`)
    }
};

const admin = {
    role: "admin",
    criarCurso: function () {
        console.log("Curso Criado com sucesso!");
    }
};

/**
 * setPrototypeOf leva dois parâmetros, o primeiro parâmetro é o objeto que eu quero usar, 
 * que eu quero herdar propriedades, então é o admin. E de quem o admin quer herdar essas 
 * propriedades ou esses métodos? Ele quer herdar de user. Então os dois parâmetros, 
 * primeiro parâmetro o objeto que vai herdar propriedades e o segundo parâmetro o objeto que vai dar, 
 * que vai ceder essas propriedades que vão ser herdadas. 
 */
Object.setPrototypeOf(admin, client);

admin.exibirInfos();