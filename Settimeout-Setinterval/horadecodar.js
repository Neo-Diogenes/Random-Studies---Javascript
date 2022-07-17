//setTimeout
//é uma função assincrona

console.log("antes")
setTimeout(function() {
    console.log("Testando a função");

}, 2000);

console.log('depois')


//setInterval

const timer = setInterval(function(){
    console.log("Testando setInterval");


}, 5000);


setTimeout(function(){
    clearInterval(timer);
}, 15000)

setTimeout(function(){
   console.log("parou");
}, 15500)