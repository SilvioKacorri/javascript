
let value = null;

let buttonValue = null;

let part1 = '';
let part2 = '';
let part3 = '';

var display = document.getElementById("number-display");

var buttons = document.querySelectorAll('.number')

var specialButtons = document.querySelectorAll('.special')


function setValue (button) {
    value = buttonValue;
    if (part2 == '') {
        part1 = part1.concat(value);
    }
    else{
        part3 = part3.concat(value)
    }
    writeDisplay();
};
buttons.forEach(button => { 
    button.addEventListener('click', () => buttonValue = button.value);
});

let buttonValues = [];
buttons.forEach(button => {      // pupullon array buttonValues me vlerat e butonave te klases .number
    let a = button.value;
    buttonValues.push(a)
});

let specialButtonValues = [];
specialButtons.forEach(button => {
    let b = button.textContent;
    specialButtonValues.push(b);
})

document.addEventListener('keydown', (event) => {                
    console.log(event.key);
    if (buttonValues.includes(event.key)){
        value = event.key;
        setValue(value);
    }
}); 

const clear = document.getElementById('clear');
    clear.addEventListener('click' , () => {
        part1 = '';
        part2 = '';
        part3 = '';
        display.textContent = '';
});

specialButtons.forEach(button => {
    button.addEventListener('click', () => {
        part2 = button.textContent;
        writeDisplay();
    })
})

function clearAfterResult(x){
    part1 = x;
    part2 = '';
    part3 = '';
    display.textContent = null;
}

const test = document.getElementById('test')
test.addEventListener('click', () => {
    console.log("part 1 " + part1);
    console.log("part 2 " + part2);
    console.log("part 3 " + part3); 

});


const calculate = document.getElementById('equals');
calculate.addEventListener('click', () => {
    let result = 0;
    part1 = parseInt(part1);
    part3 = parseInt(part3);
    
    switch(part2){
        case "+":
            result = part1 + part3;
            break;
        case "/":
            result = part1 / part3;
            break;
        case "*":
            result = part1 * part3;
            break;
        case "-":
            result = part1 - part3;
            break;
        case "%":
            result = part1 % part3;
            break;
    }
    clearAfterResult(result);

    display.textContent = result;
});

function writeDisplay(){
    display.textContent = part1 + " " + part2 + " " + part3;
};






