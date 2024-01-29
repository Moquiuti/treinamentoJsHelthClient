const livros = require('./listaLivros');
const menorValor = require('./menorValor');

livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)
   
    let livroAtual = livros[indice];
    console.log('Posição Atual', indice);
    console.log('Livro Atual', livros[indice]);
    let livroMenorPreco = livros[menor];
    console.log('Livro Menor Valor', livros[menor]);

    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual 
   })
   
   console.log(livros)

console.log(livros);