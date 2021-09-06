/* 
Desenvolva um algoritmo que receba três números. O algoritmo deve imprimir 
"Condição satisfeita", na tela, caso o primeiro dado inserido seja maior do que os outros 
dois (o primeiro não pode ser igual a nenhum). Caso contrário, deve ser impressa a 
mensagem: "Erro"
*/

var numero01 = parseFloat(prompt("Digite o 1º número qualquer: "));
var numero02 = parseFloat(prompt("Digite o 2º número qualquer: "));
var numero03 = parseFloat(prompt("Digite o 3º número qualquer: "));

if((numero01 > numero02) && (numero01 > numero03)){
    console.log("Condição satisfeita!");    
} else{    
    console.log("Error404!");
} 