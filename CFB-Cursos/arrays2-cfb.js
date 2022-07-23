
var mochila=[],mochila1 =[],mochila2=[];


var pos;

mochila1.push("faca"); //0
mochila1.push("corda"); //1
mochila1.push("Chave"); //2
mochila1.push("relogio"); //3
mochila1.push("Kindle"); //4
mochila1.push("Tablet"); //5

mochila2.push("arame"); //0
mochila2.push("joia"); //1
mochila2.push("meia"); //2
mochila2.push("moeda"); //3
mochila2.push("pedra"); //4
mochila2.push("camisa"); //5

mochila=mochila1.concat(mochila2);

console.log(mochila[9])


// mochila.splice(2,2); // vai tirar apartir do 2, dois elementos

// pos = mochila.indexOf("Kindle")


// if(pos < 0){
//    console.log("Item não está na mochila");
// } else {
//     console.log("Item está na mochila.Posição:" +pos)
// }
