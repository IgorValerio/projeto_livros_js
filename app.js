

//pegar o input

//Se for sim mostra as categorias disponiveis, pergunta qual categoria

//Se não mostra todos os livros em ordem crescente pela quantidade de paginas 

const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

  if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essa são as categorias disponiveis: ')
    console.log('Produtividade', '/História brasileira', '/Americas',
                  '/Estilo de vida', '/Tecnologia')
    const entradaCategoria = readline.question('Qual categoria voce escolhe: ')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
  } else { //Ordenando pela quantidade de páginas
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas) //Como tem numero de 3 digitos em paginas não iria dar certo se nao passasse uma callback
    console.log('Esses são todos os livros disponíveis: ')
    console.table(livrosOrdenados)
  }