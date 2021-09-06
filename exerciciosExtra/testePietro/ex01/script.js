/* Desenvova um programa que calcule o somatório dos números inteiros compreendidos entre 1 e 10, inclusive */

var soma = 0;
var x = 0;

while ( x < 11){
    soma += x; // soma = soma + x
    x++; // x = x + 1
}
console.log("O somatório é: " + soma);