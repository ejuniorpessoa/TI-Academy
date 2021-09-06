/* 
Faça um programa que receba um número 
inteiro e verifique se esse número é par ou ímpar
*/

var number = prompt("Digite aqui um número para saber se é par ou ímpar: ");
console.log("Você digitou o número: " + number);
if(number%2 == 0){
    console.log("Você digitou um número par!");
} else {    
    console.log("Você digitou um número ímpar!");
} 