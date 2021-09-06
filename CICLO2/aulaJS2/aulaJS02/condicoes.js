/* Estrutura de condições e operadores

lógicos
==
===
!=
!==
<
>
<=
>=
 */

// (==) igualdade / comparação de valores!
/* 
var v1=1; // = recebe / atribuir
var v2=1;
if(v1==v2){ // 1 true / 2 false
    console.log("Sim é verdade!");
} else {
    console.log("Isto é falso!");
}
 */

/* 
// identicos (===)
var v3=1; // se não atribuir valor, ela fica com undefined, portanto dara true
var v4;
if(v3===v4){
    console.log("V3 é exatamente igual a V4!")
} else {
    console.log("V3 é diferente de V4!")
    console.log(v4);
}
 */

/* 
var v3=1;
var v4=1;
if(v3===v4){
    console.log("V3 é exatamente igual a V4!")    
    console.log(typeof(v4)); 
} else {
    console.log("V3 é diferente de V4!")
    console.log(typeof(v3));    
}
 */

/* 
//(!=) Diferente
var v5=1;
var v6=0;
//console.log(v6+ " este valor é uma " + typeof(v6)); / mostra o tipo
if(v5 != v6){
    console.log("V5 é diferente de V6");
} else {
    console.log("São iguais");
} */

/* 
// (!==) Estritamente Diferente / Type interfere
var v7=1;
var v8=1;

if(v7!==v8){
    console.log("Exatamente diferentes!");
} else {
    console.log("Eles são Exatamente iguais!")
}
 */
/* 
//( < ) menor que
var va=200;
var vb=400;
if(va < vb){
    console.log("sim va é menor que vb")
}

 */

/* 
// ( > ) maior que 
var va=1;
var vb=1;
if(va > vb){
    console.log("Sim va é menor que vb") // nao atende condição e sai do processo vai para o fim!
} 
 */

// ( <= ) menor ou igual que
/* var vc=390;
var vd=399;
if(vc <= vd){
    console.log("Vc=" + vc + " é menor ou igual a Vd=" + vd); //concatena
} */

/* 
// ( >= )
var ve=400;
var vf=444;
if(ve>=vf){
    console.log("ve=" + ve + " é maior ou igual a vf=" + vf);
}
 */

/* 
    if/else e operadores lógicos

    NAD "E" LÓGICO (&&) E COMERCIAL
    OR "OU" LÓGICO (||) PIPE/PIPE
    NOT "NEGAÇÃO " (!) EXCALMAÇÃO
*/

/* 
// && Todas as condições precisam ser atendidas (2 OU +)
var a=0;
var b=1;
if (a==0 && b==0){
    console.log("Verdadeiro");
} else {
    console.log("Falso");
} */

/* 
// (||) - OR - Alguma das condições precisam ser atendidas
var c=0;
var d=0;
if(c==10 || d==1){
    console.log("Ok");
} else {
    console.log("!Ok");
} */

/* 
// NEGAÇÃO / NOT ( ! ) QUANDO VOU NEGAR ALGO
var s=1;
if(!typeof(s)){
    console.log("Não é uma string");
} else {
    console.log("É uma string");
    console.log(typeof(s));
} */


// SWITCH
var op=1;

switch(op){
    case 1:
        alert("Estou sendo enviado pelo case 1");
    break;
    case 2:        
        console.log("Estou sendo enviado pelo case 2");
    break;
    case 3:        
        document.write("Estou sendo enviado pelo case 3");
    break;

    default: // caso nenhuma anterior, entao default
        console.log("Nenhuma das opções");
    break;
}
