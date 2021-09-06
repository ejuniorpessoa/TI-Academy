/* Desenvova um programa que calcule o somatório dos números inteiros compreendidos entre 1 e N, inclusive.
O usuário deve ser capaz de informar o valor de N
 */

var soma = 0;
var x = 0;
var n = parseInt(prompt("Digite o valor de N: "));

while ( x < n){
    soma += x; // soma = soma + x
    x++; // x = x + 1
}

console.log("O somatório é: " + soma);