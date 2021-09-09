/*
EX - 16

Faça um programa que receba o ano de 
nascimento de uma pessoa e ano atual, calcule e mostre:
a) a idade dessa pessoa;
b) quantos anos essa pessoa terá em 2030;

*/

var hora = new Date();
var ano = hora.getFullYear();
console.log(ano);

var anoNasc="string";

while(typeof(anoNasc)!="number"){   
    anoNasc = prompt("Digite aqui o seu ano de nascimento: ");
    if(isNaN(+anoNasc)){ // se não for número será verdadeiro
        console.log("Não é número");
    } else {
        anoNasc = parseInt(anoNasc);
        if(anoNasc >= ano){// caso anoNasc seja maior que ano atual
            console.log("Data inválida!");
            anoNasc = "string"; // voltar no looping while
        } else{
            var idade = (ano - anoNasc);
            console.log("Você tem: " + idade + " anos!");
            var idadeFut = ((2030 - ano) + idade);
            console.log("Em 2030 você terá: " + idadeFut + " anos!");
        }
    }
}
