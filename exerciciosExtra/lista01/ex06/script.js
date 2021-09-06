/* Faça um programa que receba o salário base de um funcionário, calcule e mostre o salário a receber, sabendo-se que esse 
funcionário tem gratificação de 5% sobre o salário-base e paga imposto de 7% sobre o salário-base.
*/

var salarioBase = parseFloat(prompt("Insira aqui o seu salário base: "));
console.log("Seu salário base é de: R$" + salarioBase.toFixed(2));
var gratif = (salarioBase*0.05);
console.log("Gratificação: R$" + gratif.toFixed(2));
var imposto = (salarioBase*0.07);
console.log("Impostos: R$" + imposto.toFixed(2));
var salarioReceber = parseFloat( salarioBase + gratif - imposto);
console.log("Salário líquido a receber: R$" + salarioReceber.toFixed(2));