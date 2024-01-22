import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} aprovado no curdo ${curso}`;
    }
}

const newDocente = new Docente('Leandro', 'leandro.moquiuti@fmail.com', '21-04-1989');
console.log(newDocente)
console.log(newDocente.exibirInfos());
console.log(newDocente.aprovaEstudante('Davi', 'English'));


