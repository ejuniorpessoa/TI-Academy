/*

Faça um programa que receba um número 
positivo e maior que zero, calcule e mostre:
a) o número digitado ao quadrado;
b) o número digitado ao cubo;
c) a raiz quadrada do número digitado;
d) a raiz cúbica do número digitado.

*/
var numero = 0;

while(numero <= 0){ // enquanto verdadeira
    var numero = prompt("Digite um número maior que zero");
    console.log("Você digitou o número: " + numero);
}    
var quadrado = Math.pow(numero, 2); // pow elevação
console.log("O quadrado do número " + numero + " é de: " + quadrado);
var cubo = Math.pow(numero, 3);
console.log("O cubo do número " + numero + " é de: " + cubo);    
var raizQuad = Math.sqrt(numero);// sqrt raiz quadrada
console.log("A raiz quadrada de " + numero + " é de: " + raizQuad);    
var raizCub= Math.cbrt(numero);// cbrt raiz cúbica
console.log("A raiz cúbica de " + numero + " é de: " + raizCub);




