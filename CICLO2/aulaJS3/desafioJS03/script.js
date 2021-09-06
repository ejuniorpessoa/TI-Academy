/*  Desafio
- 3 caixas de texto e 1 botão
- 1º caixa de texto recebe um valor
- 2º caixa de texto recebe outro valor
- 3º caixa de texto o usuário dá um resulado
- Clicar no botão e enviar msg dizendo que está certo ou errado a soma
 */

window.onload = function (){
    var cxText01 = document.querySelector("#text01");
    var cxText02 = document.querySelector("#text02");
    var btn = document.querySelector("#btn");
    var somaBtn = document.querySelector("#somaFinal");

    btn.addEventListener("click", ()=>{
        let n1 = +cxText01.value;
        let n2 = +cxText02.value;   
        let resultado = Number(n1) + Number(n2);
        let provaR = somaBtn.value;

        if(resultado == provaR){
            alert("A soma está correta!");            
            console.log("O resultado é: " +resultado);
            alert("Parabéns, você acertou!");
        } else {
            alert("A soma está incorreta!");
            console.log("Algo está errado nesta soma =/");
            alert("Poxa, que pena, vamos tentar novamente?");
        }
    });
}