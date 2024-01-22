export default class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante';
        this.ativo = ativo;
    }
    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}

const newUser = new User('Leandro', 'leandro.moquiuti@fmail.com', '21-04-1989', null);
console.log(newUser);
console.log(newUser.exibirInfos());
