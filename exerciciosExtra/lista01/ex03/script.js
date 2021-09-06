/* 
Faça um programa que receba três notas e 
seus respectivos pesos, calcule e mostre a média ponderada dessas notas
 */

var nota01 = parseFloat(prompt("Insira aqui a 1º Nota"));
var peso01 = parseFloat(prompt("Insira o peso da 1º Nota"));
var nota02 = parseFloat(prompt("Insira aqui a 2º Nota"));
var peso02 = parseFloat(prompt("Insira o peso da 2º Nota"));
var nota03 = parseFloat(prompt("Insira aqui a 3º Nota"));
var peso03 = parseFloat(prompt("Insira o peso da 3º Nota"));

var media = ((nota01*peso01) + (nota02*peso02) + (nota03*peso03)) / 3;
console.log("A média ponderada é de: " + media);

