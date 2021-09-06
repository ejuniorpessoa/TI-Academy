//                      STRINGS!

/* 
var nome = "Marcelo";

console.log(nome.length); // mostra o tanto de caracters
console.log(nome[0]); // busca a posição 1
 */

// MATCH( )
//O método match procura uma palavra em uma string. Existem alguns parâmetros de pesquisa que permite uma maior precisão conforme a flags g / i / m 

//var palavras = "Maça doce";
// formato de Array

//console.log(palavras.match(/d/gi)); // g = modo global / i = ignora questão sensível da letra (caixa alta ou baixa!)

/* SEARCH ( )
O MÉTODO search () procura pela ocorrência e retornando a posição na caadeia da string, a posição é em relação ao primeiro caractere da ocorrência.
*/

//console.log(palavras.search(/d/gi));
// trás posição


/* REPLACE( ) = uma das mais utilizadas, pois permite substituição de caracteres ou elementos 
Este método substitui uma string por outra, simpels assim, ele pesquisa a string inforamda, como no método "match" e a substitui por outra string nas aspas infromada como segundo parâmetro
*/

/* 
var str = "Lorem ipsum dolor sit amet consectetur adipisicing elit." + " Accusamus reprehenderit illum ex   laboriosam qui molestiae animi dolorum?";

var mudarStr = str.replace(/illum/gi, "Xxxxxxxxxx"); //aonde tem "e" muda para "X" mas só no início caso não tenha o /e/gi

console.log(mudarStr);
 */

/*  LOCALECOMPARE( ) = FAZ COMPARAÇÃO ENTRE DUAS STRINGS, CASO IGUAIS RETORNARÁ ZERO
O método localeCompare compara efetua a comparação, o valor -1 ou outro número podem ser esperados caso elas não sejam iguais!
 */

/* 
var comp1 = "Comparar";
var comp2 = "comparar";
// da pra converter todas para caixa baixa ou CAIXA ALTA / toLowerCase( ) / toUpperCase( )
var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase();
// console.log(`Este é o c1: ${c1} / Este é o c2: ${c2}`)

var comparacao = c1.localeCompare(c2);
console.log(comparacao); */

/*  TRIM ()
    Remove espaços da Direita e da Esquerda, não do interior!
    antes e depois da string especificada, para tirar espaços por exemplo!
    Importação de dados é muito comum utilizar Trim e Replace para limpar informações que possam bugar
*/


var p = "        fpalavra+    ";

var r = p.trim();
console.log(r);
var s= r.replace(/f/gi, "");
console.log(s);
var sub_a = s.replace("+", ""); // sub-a buga, sei la pq!
console.log(`Removido: ${sub_a}`);


/* 
 toLocaleString("localização", {objeto}); = Relação a moeda!
pega um valor que representa uma moeda, e formata ela para o dinheiro em si
R$, U$, etc...
*/

var valor = 1.357; // 1,35; < não é reconhecido na maioria das linguagens! / arredonda valores!
var formatarMoeda = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL" // padrão da moeda a ser mostrada
});
console.log(formatarMoeda);



