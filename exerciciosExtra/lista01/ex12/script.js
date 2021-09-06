/*
Desenvolva um algoritmo que emule um caixa eletrônico. O usuário deve inserir o 
valor total a ser sacado da máquina e o algoritmo deve informar quantas notas de 100, 
50, 20, 10, 5 ou 2 reais serão entregues. Deve-se escolher as notas para que o usuário 
receba o menor número de notas possível.
*/

var saque = parseInt(prompt("Digite o valor a sacar: "));
console.log("Saque: R$" + saque);

var notaCem = saque / 100;
saque = saque % 100;
console.group("Nº notas de R$ 100,00: " + parseInt(notaCem));

var notaCinq = saque / 50;
saque = saque % 50;
console.group("Nº notas de R$ 50,00: " + parseInt(notaCinq));

var notaVinte = saque / 20;
saque = saque % 20;
console.group("Nº notas de R$ 20,00: " + parseInt(notaVinte));

var notaDez = saque / 10;
saque = saque % 10;
console.group("Nº notas de R$ 10,00: " + parseInt(notaDez));

var notaCinco = parseInt(saque / 5);
saque = saque % 5;
console.group("Nº notas de R$ 5,00: " + parseInt(notaCinco));

var notaDois = parseInt(saque / 2);
saque = saque % 2;
console.group("Nº notas de R$ 2,00: " + parseInt(notaDois));
