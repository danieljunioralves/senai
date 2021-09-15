let datadoevento = [ 15, 11, 2021];
let datadehoje = [ 14, 11, 2021];
let idade = 18;

if((datadoevento[2] - datadehoje[2]) < 0){
    console.log("impossivel marcar ano é posterior ao churrasco!!");
} else if ((datadoevento[1] - datadehoje[1]) < 0){
    console.log("impossivel marcar mês é posterior ao churrasco!!");
} else if (((datadoevento[0] - datadehoje[0]) < 0) && ((datadoevento[1] - datadehoje[1] == 0))){
    console.log("impossivel marca o dia de hoje é  posterior ao churrasco !!!");
} else {
    if( idade < 18){
        console.log("impossivel marcar a idade é inferior a 18 anos.")
    } else {
        console.log ("incrisão com sucesso !!!");
    }
}

    

