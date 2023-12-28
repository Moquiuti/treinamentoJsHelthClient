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
    const [alunos, medias] = listaDeAlunosEMedias;
    const indice = alunos.indexOf(aluno);
    if(indice >= 0) {
        const mediaDoAluno = medias[indice];
        if(mediaDoAluno >= 7) {
            console.log(`${aluno} tem a média ${mediaDoAluno}, parabéns você foi aprovado!`);
        } else {
            console.log(`${aluno} tem a média ${mediaDoAluno}, média não alcançada!`);
        }     
    } else {
        console.log("Aluno não encontrado!");
    }
};

const exibeMediadaTurma = () => { 
    let somaDasNotas = 0
    const qtdDeAlunos = medias.length;
    for(let i = 0; i < qtdDeAlunos; i++) {
        somaDasNotas += medias[i];
    }
    const media = somaDasNotas / qtdDeAlunos;
    console.log(`A média das notas é ${media}!`)
}

const exibeMediadaTurmaOf = () => { 
    let somaDasNotas = 0

    for(let element of medias) {
        somaDasNotas += element;
    }
    const media = somaDasNotas / medias.length;
    console.log(`A média das notas é ${media}!`)
}

exibeNomeENota("Davi");
exibeMediadaTurma();
exibeMediadaTurmaOf();
