var frase = $(".frase").text();
var palavrasFrase = frase.split(" ");
var numeroPalavras = palavrasFrase.length;
var tamanhoFraseTag = $("#tamanho-frase");
tamanhoFraseTag.text(numeroPalavras);
console.log(frase);
console.log(palavrasFrase.length);