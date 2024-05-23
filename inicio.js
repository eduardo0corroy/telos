const prompt = require('prompt-sync')()
const { produtos, visualizarProdutos } = require('./visualizarproduto')
const { exibirMenu } = require('./menu')

let listaDeLancamentos = []

function iniciarNovaVenda() {
  listaDeLancamentos = []
  console.log('Nova venda iniciada!')
}

function lancarVenda() {
  console.log('Lançar venda de produto:')
  visualizarProdutos()
  const codigoProduto = prompt('Digite o código do produto: ')
  const produto = produtos.find(prod => prod.codigo === codigoProduto)
  if (produto) {
    const quantidade = parseInt(prompt('Digite a quantidade: '), 10)
    if (!isNaN(quantidade) && quantidade > 0) {
      listaDeLancamentos.push({ ...produto, quantidade })
      console.log('Produto adicionado com sucesso!')
    } else {
      console.log('Quantidade inválida.')
    }
  } else {
    console.log('Código do produto inválido.')
  }
}

function imprimirNotaFiscal() {
  if (listaDeLancamentos.length === 0) {
    console.log('Não há produtos lançados para imprimir.')
    return
  }

  const data = new Date().toLocaleDateString()
  console.log(`
_____________________________________________
| NOTA FISCAL                                |
| Empresa: Télos NF                          |
| CNPJ: 12.345.678/0001-90                   |
| Endereço: Rua das Flores, 123              |
| Cidade: Cidade Exemplo                     |
| Data: ${data}                              |
|--------------------------------------------|
| Qtd | Produto                  | Preço (R$)|
|--------------------------------------------|
    `)

  let total = 0
  listaDeLancamentos.forEach(item => {
    const subtotal = item.preco * item.quantidade
    total += subtotal
    console.log(
      `| ${item.quantidade}   | ${item.nome.padEnd(22)} | ${subtotal.toFixed(
        2
      )}   |`
    )
  })

  console.log(`|--------------------------------------------|
| TOTAL: R$ ${total.toFixed(2)}                        |
|_____________________________________________|
    `)
}

module.exports = { iniciarNovaVenda, lancarVenda, imprimirNotaFiscal }
