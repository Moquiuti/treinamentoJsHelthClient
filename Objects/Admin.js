import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }
}

const newAdmin = new Admin('Leandro', 'leandro.moquiuti@fmail.com', '21-04-1989');
console.log(newAdmin);
console.log(newAdmin.exibirInfos());

