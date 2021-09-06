window.onload=function(){    

// let i=0;
// i++;
// var arr= ["caneta", "mouse"];
// console.log(arr[i]);
// console.log(`Comprimento do array é ${arr.length}`);

//  FOR  - repetir valores por nº vezes

/* 
var arr= ["caneta", "mouse", "monitor", "teclado", "outro elemento"];
console.log(arr[0]);

// arr.length tras pro for a quantidade exata de elementos!
for(var inc=0; inc < arr.length ; inc++){
    console.log(`Valor do inc: ${inc}`);
} */

//  FOR IN = Ele captura / é enviado o valor de cada índice do nosso Array para nossa variável e cada vez que faz o looping vai indexando na variável idx

/* 
var arr= ["caneta", "mouse", "monitor", "teclado", "outro elemento"];

for(let idx in arr){
    console.log(arr[idx]);
} */

/* 
//  FOR OF = Ele trás o valor  / mais dinamizado para este tipo de tratamento
var arr= ["caneta", "mouse", "monitor", "teclado", "outro elemento", "mais um elemento"];

for(var i of arr){
    console.log(i);
} */

/* 
//  WHILE  =- Enquanto for verdade, então executar o código
var x=0;
while(x < 10){
    x++;
    console.log(x);
}
 */

//  DO WHILE - Se for false então repete Do, caso verdadeiro cai no While
/* 
do {
    n = prompt("Digite zero");
    if(n!=0){
        alert("Diferente de zero");
    }
1
} while( n != 0 );
     */
}