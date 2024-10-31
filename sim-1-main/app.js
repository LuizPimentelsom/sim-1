function criaCartao(categoria, pergunta, respostas) {
  let conteiner = document.getElementById('container')
  let cartao = document.createElement('article')
  cartao.className = 'cartao'

  cartao.innerHTML = `
   <div class="cartao__conteudo">
  <h3>${categoria}</h3>
  <div class="cartao__conteudo__pergunta">
     <p>${pergunta}</p>
  </div>
  <div class="cartao__conteudo__resposta">
    <p>${respostas}</p>
  </div>
</div>`

    container.appendChild(cartao)
  }