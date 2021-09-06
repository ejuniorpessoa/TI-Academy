// FUNÇÕES

function soma(){ // sem parametro
    var x=1;
    var y=2;
    console.log(x+2); //
}

//soma ();


function somaPar(x, y){ // parametros (x, y)
    var r = x+y;
    console.log(r);
}

// somaParametro(4, 9);// informar os parametros das funções que vai ser utilizados

//recuperar resposta de uma função para ser usada posteriormente
/* 
(function respostaF(){
    var nome="Edson";
    alert(nome);
    return nome; // retornar a variavel, sem return nao retorna
})(); // redução de codificação sem necessidade de chama entre ( ) dps abro e fecho ()
 */

//var d = respostaF();

/* 
// FUNÇÕES ANÔNIMAS / SEM NOME ESPECÍFICO
var f = function(){
    alert("Função sem nome");
}
 */
//f(); // chama função 

// SEM REFERENCIALAS

// ANONIMAS E ARROW FUNCTIONS BEM USADAS EM FRAMEWORKS PARA DEIXAR O CÓDIGO MAIS LIMPO

/* 
// FUNÇÕES ARROW FUNCTIONS SE ESCREVE MENOS
()=>{
    //codigo;
} 
*/

/* 
ARROW
var ar = ()=>{alert("ArFunc")}
ar(); */

//Executada Dinamicamente / auto executavel sem chama-la

//( ()=>{alert("ArFunc")} )(); // (()=>{})();

function mult(n, o){
    var resultado = (n * o);
    console.log(resultado);
}

function pot(n, o){
    var resultado = Math.pow(n, o);
    console.log(resultado);
}

mult(3, 4);
pot(7, 2);
