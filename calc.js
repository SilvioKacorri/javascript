
let value = null;


let part1 = '';
let part2 = '';
let part3 = '';

var display = document.getElementById("number-display");

var buttons = document.querySelectorAll('.number')

var specialButtons = document.querySelectorAll('.special')


function setValue (value) {
    if (part2 == '') {
        part1 = part1.concat(value);
    }
    else{
        part3 = part3.concat(value)
    }
    writeDisplay();
};
buttons.forEach(button => { 
    button.addEventListener('click', () => {
        setValue(button.value);
    });
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
});

document.addEventListener('keydown', (event) => {                
    console.log(event.key);
    if (buttonValues.includes(event.key)){
        setValue(event.key);
    }
    if (specialButtonValues.includes(event.key)){     // special button key stroke .. ayo??
        part2 = event.key;
    }
    if (event.key === "Enter"){
        calculateFunction();
    }
    if (event.key === "Backspace"){
        fullClear();
    }
    writeDisplay();
}); 

specialButtons.forEach(button => {
    button.addEventListener('click', () => {        //special buttons click function
        part2 = button.textContent;
        writeDisplay();
    })
})


const clear = document.getElementById('clear');
    clear.addEventListener('click' , () => {
        part1 = '';
        part2 = '';
        part3 = '';
        display.textContent = '';
});

function fullClear(){
    part1 = '';
    part2 = '';
    part3 = '';
    display.textContent = 0;
}

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
    calculateFunction();
})

function calculateFunction() {
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
}


function writeDisplay(){
    display.textContent = part1 + " " + part2 + " " + part3;
};






