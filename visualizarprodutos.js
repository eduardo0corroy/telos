const produtos = [
  { codigo: '001', nome: 'Computador Desktop Intel Core i5', preco: 3199.0 },
  { codigo: '002', nome: 'Laptop Ultrabook Intel Core i7', preco: 4799.0 },
  { codigo: '003', nome: 'Monitor LED 24 polegadas Full HD', preco: 799.9 },
  { codigo: '004', nome: 'Teclado Mecânico Gamer RGB', preco: 299.0 },
  { codigo: '005', nome: 'Mouse Óptico Sem Fio', preco: 79.9 }
]

function visualizarProdutos() {
  console.log('Produtos disponíveis para venda:')
  produtos.forEach(produto => {
    console.log(
      `${produto.codigo} - ${produto.nome} - R$ ${produto.preco.toFixed(2)}`
    )
  })
}

module.exports = { produtos, visualizarProdutos }
