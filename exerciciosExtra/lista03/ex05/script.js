/* 
Desenvolva um algoritmo que simule uma calculadora. Você deve dar a opção de o 
usuário escolher entre: 1 - Somar; 2 - Subtrair; 3 - Multiplicar; 4 - Dividir. O usuário só 
conseguirá processar dois números inteiros por vez
*/

console.log("Digite 1 para somar");
console.log("Digite 2 para sub");
console.log("Digite 3 para mult");
console.log("Digite 4 para dividir");


var calc = +prompt("Digite aqui o número para as opções anteriores: ");
var number01 = 0;
var number02 = 0;

var soma = 1;
var sub = 2;
var mult = 3;
var div = 4;

switch(calc){
    case 1:
        number01 = +prompt("Digite aqui o 1º número: ");
        number02 = +prompt("Digite aqui o 2º número: ");
        soma = (number01 + number02);
        console.log("A soma dos números " + number01 + " e " + number02 + " é de: " + soma);
    break;
    case 2:
        number01 = +prompt("Digite aqui o 1º número: ");
        number02 = +prompt("Digite aqui o 2º número: ");
        sub = (number01 - number02);
        console.log("A subtração dos números " + number01 + " e " + number02 + " é de: " + sub);
    break;
    case 3:
        number01 = +prompt("Digite aqui o 1º número: ");
        number02 = +prompt("Digite aqui o 2º número: ");
        mult = (number01 * number02);
        console.log("A multiplicação dos números " + number01 + " e " + number02 + " é de: " + mult);
    break;
    case 4:
        number01 = +prompt("Digite aqui o 1º número: ");
        number02 = +prompt("Digite aqui o 2º número: ");
        div = (number01 / number02);
        console.log("A divisão dos números " + number01 + " e " + number02 + " é de: " + div);
    break;
    default:
        console.log("Opção inválida, tente novamente!");
    break;
}