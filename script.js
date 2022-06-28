

let numberBtns = document.querySelectorAll(".button");
let resultado = document.getElementById('resultado')
let cButton = document.getElementById('cBtn');
let eraseBtn = document.getElementById('eraseBtn');
let equal = document.getElementById('equal');


numberBtns.forEach((button) => {

        button.addEventListener('click', shownumber)
        
    })

cButton.addEventListener('click', clear)

eraseBtn.addEventListener('click', backspace)

equal.addEventListener('click', calculate)



function shownumber (x){

    if(x.target.innerHTML == 'x'){
        resultado.innerHTML =  resultado.innerHTML + '*'
    }else{

    resultado.innerHTML =  resultado.innerHTML + x.target.innerHTML
    }
}

function clear () {

        resultado.innerHTML = '';
}

function backspace () {
    
    let result = resultado.innerHTML;
    document.getElementById('resultado').innerHTML = result.substring(0, result.length -1)
}

function calculate () {

    let result = resultado.innerHTML;

    if(result){
        document.getElementById('resultado').innerHTML = eval(result)
    }
   
}