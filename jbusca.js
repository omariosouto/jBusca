(function(){

  function jBusca (seletor) {
    this.elementos = document.querySelectorAll(seletor)
  }

  jBusca.prototype.on = function(acao, funcao) {
    for (var i = 0; i < this.elementos.length; i++) {
      if(this.elementos[i].addEventListener) {
        this.elementos[i].addEventListener(acao, funcao)	 			 
      }
      if(this.elementos[i].attachEvent) {
        this.elementos[i].attachEvent('on' + acao, funcao )
      }
    }
  }

  function $(element) {
    return new jBusca(element)
  }

  $('.elemento').on('click', function() { console.log('clicou!') } )

})()
