

var numeros = [10,50,5,30,25,19,20,50];

function media(numeros){
    var tam = numeros.length;
    var soma = 0;
    for(var i=0; i<tam; i++){
        soma+=numeros[i];
    }
    return Math.round(soma/tam);
}

console.log(media(numeros));

