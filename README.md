# senailet salaDeAula = ["Gabriela", "Daniel"];

for(let contador = 0; contador <= salaDeAula.length; contador++){
    if(contador == 0){
        console.log("O número é: " + contador + " isso mesmo, é ZERO!");
    } else if(contador % 2 == 0) {
        console.log("O número é: " + contador + " e é PAR!");
    } else if(contador % 2 == 1) {
        console.log("O número é: " + contador + " e é ÍMPAR!");
    }
}
let ano = 2020;


if((ano % 100) == 0){
    if((ano % 400) == 0){
        console.log("o ano "+ano+" é bissexto.");
    } else {
            console.log("o ano "+ano+" não é bissexto.");
        }
} else if((ano % 4) == 0){
        console.log("o ano "+ano+" é bissexto.");
    } else {
    console.log("o ano "+ano+" não é bissexto.");
        }
