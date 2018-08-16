(()=>{

    var quant_genes = 4;
    //var individuo = [];
    //var populacao = [];

    function genesis(tamPoulacao) {
      var populacao = [];
      var individuo = [];
      for(var i = 0; i<tamPoulacao; i++){
        for(var j = 0; j<quant_genes; j++) {
            individuo.push(getRandomInt(0,1));
        }
        populacao.push(individuo);
        individuo = [];
      }

      return populacao;
    }

    function calculoDeAptidao(populacao){
        var 

    }

    console.log(genesis(4));

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


})();