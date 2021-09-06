/* 
Faça um programa que receba dois números 
e mostre o maior deles. Caso eles sejam iguais, deve-se mostrar a mensagem "Os 
números são iguais".
*/

var numero01 = prompt("Digite um número qualquer: ");
var numero02 = prompt("Digite um número qualquer: ");

if(numero01 > numero02){
    console.log("O número maior é: " + numero01);
} else if(numero01 < numero02){
    console.log("O número maior é: " + numero02);
} else {
    console.log("Os números: " + numero01 + " e " + numero02 + " são iguais!");
}
