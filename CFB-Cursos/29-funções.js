

var numeros = [10,50,5,30,25,19,20,50];

function media(numbers){
    var soma = 0;
    for(var i=0; i<numbers.length; i++){
        soma+=numbers[i];
    }
    return Math.round(soma/numbers.length);
}

console.log(media(numeros));



// ele criou uma váriavel para o numeros.length
//fiz da minha forma