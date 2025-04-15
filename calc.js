
let value = null;

let part1 = '';
let part2 = '';
let part3 = '';

var display = document.getElementById("number-display");

var buttons = document.querySelectorAll('.number')

var specialButtons = document.querySelectorAll('.special')


function setValue (button) {
    value = button.value;
    if (part2 == '') {
        part1 = part1.concat(value);
    }
    else{
        part3 = part3.concat(value)
    }
    writeDisplay();
};

buttons.forEach(button => {
    button.addEventListener('click', () => setValue(button));
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
        console.log(part2)
    })
})

function clearAfterResult(){
    part1 = '';
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
            console.log(parseInt(result));
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
    clearAfterResult();


    display.textContent = result;
})

function writeDisplay(){
    display.textContent = part1 + " " + part2 + " " + part3;
}







