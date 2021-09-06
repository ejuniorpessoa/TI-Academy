/*
Faça um programa que receba o saláriobase de um funcionário, calcule e mostre o seu salário a receber, sabendo-se que esse 
funcionário teve gratificação de R$ 600,00 e paga imposto de 10% sobre o salário base.
*/

var salarioBase = parseFloat(prompt("Insira aqui o seu salário base: "));
console.log("Seu salário base é de: R$" + salarioBase.toFixed(2));
var gratif = 600;
console.log("Gratificação: R$" + gratif.toFixed(2));
var imposto = (salarioBase*0.1);
console.log("Impostos: " + imposto.toFixed(2));
var salarioReceber = parseFloat( salarioBase + gratif - imposto);
console.log("Salário líquido a receber: R$" + salarioReceber.toFixed(2));