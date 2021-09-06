/* 
Desenvolva um algoritmo que receba dois números, calcule e mostre a multiplicação 
entre eles, se ambos forem iguais. Caso o primeiro seja maior que o segundo, mostre a 
subtração do primeiro pelo segundo. Caso contrário, mostre a soma entre os dois.
*/

var number01 = +prompt("Digite aqui o 1º número: ");
var number02 = +prompt("Digite aqui o 2º número: ");

console.log("Você digitou o número: (" + number01 + ") e (" + number02 + ")");

if(number01 == number02){
    var mult = (number01*number02);    
    console.log("a multiplicação entre os números (" + number01 + ") x (" + number02 + ") é de: " + mult);
} else if(number01 > number02){  
    var sub = (number01 - number02);
    console.log("a subtração entre os números (" + number01 + ") - (" + number02 + ") é de: " + sub);
}  else {
    var soma = (number01+number02); 
    console.log("a somao entre os números (" + number01 + ") + (" + number02 + ") é de: " + soma);
}