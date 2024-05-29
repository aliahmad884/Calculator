let display = document.getElementById("display");
let calBtn = document.getElementById("calBtn");
let inputValues = /^[0-9+\-*/.,()]*$/;
// let historyArray=[];
calBtn.addEventListener("click", () => {
    if (inputValues.test(display.value)) {
        try {
            display.value = eval(display.value);
        }
        catch (err) {
            display.value = "Error"
        }
    } else {
        alert("Input Not Valid!")
        display.value = '';
        display.focus();
    }
    display.focus();
})

let displayInput = (input) => {
    // console.log(input)
    display.value += input;
    display.focus();
}

let allClear = () => {
    display.value = '';
}

let backSpace = () => {
    display.value = display.value.slice(0, -1)
}



function handleEvent(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        calBtn.click()
    }
}

document.addEventListener("keydown", handleEvent)