const prompt = require('prompt-sync')()
const { visualizarProdutos } = require('./visualizarproduto')
const {
  iniciarNovaVenda,
  lancarVenda,
  imprimirNotaFiscal
} = require('./inicio')

function exibirMenu() {
  console.log(`
    Menu Principal:
    1. Visualizar produtos cadastrados
    2. Lançar venda de produto
    3. Imprimir nota fiscal
    4. Iniciar uma nova venda
    5. Sair
    `)

  const opcao = prompt('Escolha uma opção: ')
  switch (opcao) {
    case '1':
      visualizarProdutos()
      break
    case '2':
      lancarVenda()
      break
    case '3':
      imprimirNotaFiscal()
      break
    case '4':
      iniciarNovaVenda()
      break
    case '5':
      console.log('Saindo do sistema. Até logo!')
      process.exit()
    default:
      console.log('Opção inválida. Tente novamente.')
  }
}

module.exports = { exibirMenu }
