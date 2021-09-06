/* 
Faça um programa que receba o salário de 
um funcionário, calcule e mostre o novo salário, sabendo-se que este sofreu um 
aumento de 25%
 */

var salario = parseFloat(prompt("Insira aqui o seu salário"));
console.log("Seu salário é de: " + salario);
var aumento = parseFloat(prompt("Insira aqui o aumento em % do salário"));
console.log("Aumento de R$" + aumento + "%");
var novoSalario = parseFloat((salario * (aumento*0.01)));
alert("Seu novo aumento é de : R$" + novoSalario);
var salarioAtual = parseFloat(novoSalario + salario);
alert("Seu salário atual será de: R$" + salarioAtual.toFixed(2));