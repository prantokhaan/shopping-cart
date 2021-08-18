function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;

    }
});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typed = document.getElementById('typed-numbers').value;
    const failSuccess = document.getElementById('notify-success');
    const failError = document.getElementById('notify-failed');
    if(pin == typed && pin !== ''){
        window.location.href = 'order-confirm.html'
    }
    else if(pin == ''){
        failSuccess.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        failSuccess.style.display = 'none';
        failError.style.display = 'block';
    }
    
}

document.getElementById('button-submit').addEventListener('click', function(){
    let actionInput = document.getElementById('action-left');
    const actionLeft = actionInput.innerText;
    const previousActionLeft = parseFloat(actionLeft);
    const newActionLeft = previousActionLeft - 1;
    actionInput.innerText = newActionLeft;

    if(newActionLeft == 0){
        document.getElementById('button-submit').disabled = true;

    }
})