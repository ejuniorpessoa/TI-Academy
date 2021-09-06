/*                      querySelectorAll( ) 
pega todos os elementos filhos de um mesmo grupo (div por exe)
Percore um elemento em busca de varios elementos filhos utilizando o looping forEach( ) 
             querySelect pega apenas o 1º elemento, e não todos!
*/
//forEach() = Percore e faz iteração dos elementos (looping) Recebe um callBack (função de retorno) para jogar o valor em outro parâmetro. Parecido com o "for in()"

//setAttribute() = acrescenta ou seta um atributo para um elemento

  window.onload = function(){

    //saber aonde esta clicando
    const pai = document.querySelectorAll("#pai");
    pai.forEach((pegarFilhos)=>{

        pegarFilhos.addEventListener('click',(filho)=>{

            alert(filho.target.textContent);

        });
    });
 
    const btn = document.querySelector("#btn");
    const outroPai = document.querySelector('#outroPai');
    var i = 0;
    btn.addEventListener('click',()=>{

        let lista = ["Banana", "Uva", "Pera", "Manga"];

        li = document.createElement("li");//criação de elemento para inserir futuramente ao código!
        
        //textContent por inserir um valor
        outroPai.appendChild(li).textContent=lista[i];
        li.setAttribute("class", "itemL");// atribuiu uma classe para o elemento li
        i++;
    });

//      como eu chego até os filhos - percorrer esta lista!
    const paiDaLista = document.querySelectorAll("#outroPai");
    paiDaLista.forEach(listaDeFilhos=>{
        // "penerar" os "filhos"
        listaDeFilhos.addEventListener("click",(filhos)=>{
            alert(filhos.target.textContent);
        });
    });

}