(()=>{

    const max = 16777215, precisao = 0.0005;
    var quant_genes = 4;

    function init() {
        var populacao = genesis(quant_genes);
        var controle = true;
        var iter = 0;

        while(controle){
            console.log("população "+iter, populacao);
            populacao.forEach(function (inidividuo) {
                calculoDeAptidao(inidividuo);
                if(inidividuo <= precisao){
                    controle = false;
                }else{
                    populacao = cruzamento(populacao);
                }
            });


            controle = false;
            iter++;
        }

    }

    init();

    function cruzamento(populacao) {
        var filhos = [];
        var roleta = {
            valores : [],
            total : 0
        };
        populacao.forEach(function (individuo) {
            let x = individuo >> 12;
            let y = individuo & 4096;
            x  = toReal(x);
            y = toReal(y);
        });
    }

    function toReal(valor) {
        return -1+(2/(Math.pow(2,12)-1))*valor
    }

    function genesis(tamPoulacao) {
      var populacao = [];
      for(var i = 0; i<tamPoulacao; i++){
          var individuo = getRandomInt(0, max);
          populacao.push(individuo);
      }
      return populacao;
    }

    function calculoDeAptidao(individuo){
        let x = individuo >> 12;
        let y = individuo & 4096;
        x  = toReal(x);
        y = toReal(y);
        return Math.abs(Math.pow(Math.E,-x)-Math.pow(y,2)+1)+Math.pow(10,-4);
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