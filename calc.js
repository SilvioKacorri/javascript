let value = 0;

var display = document.getElementById("number-display");

var buttons = document.querySelectorAll('button')


function setValue (button) {
    value = button.value;
    console.log(value);
};

buttons.forEach(button => {
    button.addEventListener('click', () => setValue(button));
});

console.log(value);

display.textContent = value;