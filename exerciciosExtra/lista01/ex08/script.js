/*
Faça um programa que receba o valor de 
um depósito e o valor da taxa de juros, calcule e mostre o valor do rendimento e o valor total depois do rendimento.
*/

var deposito = parseFloat(prompt("Insira aqui o seu depósito: "));
console.log("Seu depósitoé de: R$" + deposito.toFixed(2));
var juros = prompt("Digite aqui a taxa de juros: ");
console.log("A taxa de juros é de: " + juros + "%");
var rendimento = ( deposito * (juros*0.01));
console.log("Rendimento atual: R$" + rendimento);
var total = deposito + rendimento;
console.log("Valor total de: R$" + total);