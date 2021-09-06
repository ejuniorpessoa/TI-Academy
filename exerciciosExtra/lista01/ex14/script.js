/*
Faça um programa que receba dois 
números maiores que zero, calcule e mostre um elevado ao outro
*/
var numero01 = 0;
var numero02 = 0;

while (numero01 <= 0 || numero02 <= 0){ 
    var numero01 = prompt("Digite o 1º número maior que zero");
    var numero02 = prompt("Digite o 2º número maior que zero");  
}

console.log("O 1º número digitado foi: " + numero01);
console.log("O 2º número digitado foi: " + numero02);

var elev = Math.pow(numero01, numero02);
var cub = Math.cbrt(numero01, numero02);

console.log("O número (" + numero01 + ")^(" + numero02 + ") será de: " + elev);
console.log("O número (" + numero01 + ") Raiz cúbica de (" + numero02 + ") será de: " + cub);