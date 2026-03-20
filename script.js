// Função para aumentar a quantidade do produto (máximo 10)
function aumentar(btn) {
  let produto = btn.parentElement;
  let quantidadeSpan = produto.querySelector(".quantidade");

  let quantidade = parseInt(quantidadeSpan.innerText);

  // Limite máximo de 10 unidades
  if (quantidade < 10) {
    quantidade++;
    quantidadeSpan.innerText = quantidade;
  } else {
    alert("Limite máximo de 10 unidades por produto.");
  }

  calcularTotal();
}


// Função para diminuir a quantidade
function diminuir(btn) {
  let produto = btn.parentElement;
  let quantidadeSpan = produto.querySelector(".quantidade");

  let quantidade = parseInt(quantidadeSpan.innerText);

  // Evita números negativos
  if (quantidade > 0) {
    quantidade--;
    quantidadeSpan.innerText = quantidade;
  }

  calcularTotal();
}

// Função principal: calcula o valor total do pedido
function calcularTotal() {
  let produtos = document.querySelectorAll(".produto");
  let total = 0;

  produtos.forEach(produto => {
    let preco = parseFloat(produto.dataset.preco); // pega preço do HTML
    let quantidade = parseInt(produto.querySelector(".quantidade").innerText);

    total += preco * quantidade;
  });

  // Atualiza o valor exibido na tela
  document.getElementById("total").innerText = total.toFixed(2);
}