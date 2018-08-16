(()=>{

    var quant_genes = 4;
    //var individuo = [];
    //var populacao = [];

    function init() {
        var populacao_inicial = genesis(4);
        calculoDeAptidao(populacao_inicial);
    }

    init();

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
        var aptidao = [];

        populacao.forEach((individuo)=>{
            aptidao.push(individuoToVal(individuo));
        });

        return aptidao;
    }



    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function individuoToVal(individuo) {
        var valor = 0;
        var cont = 0;
        individuo.forEach((gene)=>{
            valor+= Math.pow(gene, cont);
            cont++
        });

        return valor;
    }


})();