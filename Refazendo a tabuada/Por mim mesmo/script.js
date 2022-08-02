

function calcular() {
let num = document.querySelector('.numero')
let tab = document.querySelector('.tab')

if(num.value.length == 0){
    alert('ponha um número')
} else {
    var n = Number(num.value)
    var c = 1
    tab.innerHTML=""

    for(i=c; i<=10; i++){
        let item = document.createElement('option')
        item.innerText = `${n} x ${i} = ${n*i}`
        tab.appendChild(item)
        




    }
}

}