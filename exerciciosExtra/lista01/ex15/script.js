/*
EX - 15

Sabe-se que:
1 pé = 12 polegadas;
1 jarda = 3 pés;
1 milha = 1760 jardas;
Faça um programa que receba uma medida em pés, faça as conversões a seguir e 
mostre os resultados.
a) polegadas;
b) jardas;
c) milhas.

*/

//var pes = (12*polegadas);
//var jardas = (3*pes);
//var milha = (1760*jardas);

var medida = prompt("Digite aqui o valor em pés a ser convertido: ");
var polegadas = (medida / 12);
console.log("Valor em polegadas de: " + polegadas);
var jardas = (3 * medida);
console.log("Valor em jardas de: " + jardas);
var milhas = (1760 * medida);
console.log("Valor em milha de: " + milhas);

