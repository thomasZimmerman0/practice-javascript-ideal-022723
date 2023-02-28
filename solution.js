let display = document.getElementById("display");

let value1 = '';
let value2 = '';
let operator = '';
let isSecondValue = false;

const isNumber = {
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '0': '0',
}

const isOperation = {
    '+': function (x, y) {return x + y },
    '-': function (x, y) {return x - y },
    '/': function (x, y) {return x / y },
    '*': function (x, y) {return x * y },
}



document.addEventListener("click", (e)=>{
    
    if(isNumber[e.target.id]){

        if(!isSecondValue){
            value1 = value1 + e.target.id;
            display.innerHTML = value1;
        } else {
            value2 = value2 + e.target.id;
            display.innerHTML = value2;
        }

    }

    if(isOperation[e.target.id]){
        operator = e.target.id
        display.innerHTML = operator
        isSecondValue = true;
    }

    if( '=' == e.target.id){
        value1 = parseInt(value1);
        value2 = parseInt(value2);
        display.innerHTML = isOperation[operator](value1, value2)
    }

    if( 'C' == e.target.id){
        value1 = '';
        value2 = '';
        display.innerHTML = 'Display';
        operator = '';
        isSecondValue = false;
    }

})