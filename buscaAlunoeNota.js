const getRandomArbitrary = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const resultado = Math.floor(Math.random() * (max - min) + min);
    return resultado;
};
const alunos = ["João", "Juliana", "Ana", "Caio", "Leandro", "Tainá", "Davi", "Sara"];
const medias = [getRandomArbitrary(0,10), getRandomArbitrary(0,10), getRandomArbitrary(0,10), getRandomArbitrary(0,10), getRandomArbitrary(0,10), getRandomArbitrary(0,10), getRandomArbitrary(0,10), getRandomArbitrary(0,10),];
const listaDeAlunosEMedias = [alunos, medias];
const exibeNomeENota = (aluno) => {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);
        const mediaDoAluno = listaDeAlunosEMedias[1][indice];
        if(mediaDoAluno >= 7) {
            console.log(`${aluno} tem a média ${mediaDoAluno}, parabéns você foi aprovado!`);
        } else {
            console.log(`${aluno} tem a média ${mediaDoAluno}, média não alcançada!`);
        }     
    } else {
        console.log("Aluno não encontrado!");
    }
};

exibeNomeENota("Leandro");