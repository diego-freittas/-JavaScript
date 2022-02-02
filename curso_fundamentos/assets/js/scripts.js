
const CURRENT_NUMBER = document.getElementById("currentNumber");
const elementBtnIncrement = document.getElementById("adicionar");
const elementBtnDecrement = document.getElementById("subtrair");

var  count = 0;

elementBtnIncrement.addEventListener("click", increment);
elementBtnDecrement.addEventListener("click", decrement);


function increment() {
	count++;
    document.getElementById("currentNumber").innerHTML = count;
    desabilitaBTN(count);
}

function decrement() {
	count--;
    document.getElementById("currentNumber").innerHTML = count;
    desabilitaBTN(count);
}

function desabilitaBTN(count) {
    
    if (count == 10 ) {
        elementBtnIncrement.disabled = true;
        elementBtnIncrement.classList.toggle('toggleButton');
    }if(count == -10){
        elementBtnDecrement.disabled = true;
        elementBtnDecrement.classList.toggle('toggleButton');
    }
}

