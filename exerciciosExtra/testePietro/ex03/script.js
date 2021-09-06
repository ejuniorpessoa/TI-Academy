/* Desenvova um programa que calcule o produtório dos números inteiros compreendidos entre 1 e N, inclusive.
O usuário deve ser capaz de informar o valor de N
 */

var produto = 1;
var x = 1;
var n = parseInt(prompt("Digite o valor de N: "));

while ( x < n){
    produto *= x; // soma = soma + x
    x++; // x = x + 1
}

console.log("O produtório é: " + produto);