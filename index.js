function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');

   let num = Number(value);
    if(isNan(num)) {
        result.textContent = 'Invalid, please enter a number';
    }else{
        result.textContent = num * num;
    } 
    
}

