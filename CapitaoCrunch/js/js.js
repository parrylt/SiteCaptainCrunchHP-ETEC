/*código para apenas executar quando o HTML estiver carregado completamente. A função só vai funcionar depois da página ser carregada*/
document.addEventListener("DOMContentLoaded", function() {

var quadrado = document.getElementById("quadrado"); /*variavel fazendo referencia ao elemento para manipular ele*/
var botao_circulo = document.getElementById("botao_circulo"); /*variavel fazendo referencia ao elemento para manipular ele*/

/*eventlistener faz com que quando o clique acontece no botao_circulo, a função acontece. 
Se o quadrado estiver visível, a função muda ele para none e ele some. Else, ele vira block e aparece*/
botao_circulo.addEventListener("click", function() {
  if (quadrado.style.display === "block") {
    quadrado.style.display = "none";
  } else {
    quadrado.style.display = "block";
  }
});
});