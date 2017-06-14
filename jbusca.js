(function(){

  function buscaElemento(seletor) {
    var elementos;
    if(document.querySelectorAll) {
      elementos = document.querySelectorAll(seletor);
    }
    // Outras verificações...
    this.elementos = elementos
  }

  buscaElemento.prototype.adicionaEvento = function adicionaEvento(acao, funcao) {
    var elementos = this.elementos
    for(var i = 0; i < elementos.length; i++) {
      if(elementos[i].addEventListener) {
        elementos[i].addEventListener(acao, funcao);	 
      }
      if(elementos[i].attachEvent) {
        elementos[i].attachEvent('on' + acao, funcao);	 	 
      }
    }
  }

  function $(selector) {
    return new buscaElemento(selector)
  }

  // Esse trecho é incluido só para facilitar testes, crie um elemento qualquer com a class elemento `div.elemento{Olá}`
  // e de um click nele
  $('.elemento').adicionaEvento('click', function() { console.log('clicou!') } )

})()
