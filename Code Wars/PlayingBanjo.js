
//Função do game


// function areYouPlayingBanjo(name) {
//     if (name[0].toLowerCase() === 'r') {
//       return name + ' plays banjo';
//     } else {
//       return name + ' does not play banjo';
//     }
//   }

//modifiquei

function areYouBrazilian(country){
    if(country.toLowerCase() == 'brasil'){
        return "Se você é de " + country + " you are Brazilian";
    } else {
        return " you are not Brazilian"
    }
}


console.log(areYouBrazilian('brasil'))