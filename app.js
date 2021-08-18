 function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update case total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calculate total 
    calculateTotal();
}
function getInputValue(product){
    const productInput = document.getElementById(product + '-number').value;
    const productNumber = parseInt(productInput);
    return productNumber;
}
function calculateTotal(){
    
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const discountAmount = Math.round(subTotal / 50);
    const totalPrice = (subTotal - discountAmount) + 60;

    // update on the html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('discount').innerText = discountAmount;
    document.getElementById('total').innerText = totalPrice;
}
// phone plus 
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
});
// phone minus 
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
});
// case plus 
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});
// case minus 
document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case', 59, false);
});

function confirmOrder(){
    window.location.href = 'pin.html'
}