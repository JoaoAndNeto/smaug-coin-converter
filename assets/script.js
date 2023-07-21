function Converter() {
    var valorElemento = window.document.getElementById("valor");
    var valor = Number(valorElemento.value);
    //Poderia também ter usado o parseFloat
    var valorReal = valor * 4.79;
    var valorBtc = valor * 0.000053;
    //  console.log(valorReal);
    //  console.log(valorBtc);
    var valorConvertidoReal = window.document.getElementById(
      "valorConvertidoReal"
    );
    var valorConvertidoBtc = window.document.getElementById("valorConvertidoBtc");
    var valorConvertidoRealTela = `O valor em reais é R$ ${valorReal}!`;
    valorConvertidoReal.innerHTML = valorConvertidoRealTela;
    var valorConvertidoBtcTela = `O valor em Bitcoin é BTC ${valorBtc}!`;
    valorConvertidoBtc.innerHTML = valorConvertidoBtcTela;
  }