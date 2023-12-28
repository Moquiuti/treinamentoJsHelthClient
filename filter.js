const getRandomArbitrary = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const resultado = Math.floor(Math.random() * (max - min) + min);
    return resultado;
};

const alunos = ["João", "Juliana", "Ana", "Caio", "Leandro", "Tainá", "Davi", "Sara"];
const notas = [getRandomArbitrary(0,10), getRandomArbitrary(0,10), getRandomArbitrary(0,10), getRandomArbitrary(0,10), getRandomArbitrary(0,10), getRandomArbitrary(0,10), getRandomArbitrary(0,10), getRandomArbitrary(0,10),];
console.log(notas);

const reprovados = alunos.filter((_, indice) => {
  return notas[indice] < 7;
});

console.log(reprovados);