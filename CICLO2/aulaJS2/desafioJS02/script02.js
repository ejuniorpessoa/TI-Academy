var fruta = prompt(nome + ", escolha sua fruta favorita, entre: Laranja, Abacaxi, Pera, Kiwi e Uva ");
switch(fruta){
    case "Laranja":
        document.write("Sua fruta favorita é: " + fruta);
    break;
    case "Abacaxi":
        document.write("Sua fruta favorita é: " + fruta);
    break;
    case "Pera":
        document.write("Sua fruta favorita é: " + fruta);
    break;
    case "Kiwi":
        document.write("Sua fruta favorita é: " + fruta);
    break;
    case "Uva":
        document.write("Sua fruta favorita é: " + fruta);
    break;
    default:
        document.write("Infelizmente, " + nome + ", não temos a fruta " + fruta + " disponível no momento! :/ ");
    break;
}