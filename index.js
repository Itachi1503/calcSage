let display = document.getElementById("display");
let numBtns = document.querySelectorAll(".numBtn")
let currentInput = "";
let expression = [];
let firstOperand = null
let greenPallet = document.getElementById("green");
let pinkPallet = document.getElementById("pink");
let purplePallet = document.getElementById("purple");
let yellowPallet = document.getElementById("yellow");
let container = document.querySelector(".container");
let answer = document.getElementById("answer");
let copyBtn = document.querySelector(".copyBtn");
let clear = document.querySelector(".clear");
let footerBtns = document.querySelectorAll('.footer-btn');
let currentPalette = 'green-back';
let calc = document.getElementById("calc");
const colorMap = {
    'green-back': {
        'background': '#006859', // example green color
        'text': '#FFFFFF'       // white text
    },
    'pink-back': {
        'background': '#FFC0CB', // example pink color
        'text': '#000000'       // black text
    },
    'purple-back': {
        'background': '#800080', // example purple color
        'text': '#FFFFFF'       // white text
    },
    'yellow-back': {
        'background': '#FFFF00', // example yellow color
        'text': '#000000'       // black text
    }
};


purplePallet.addEventListener("click", ()=> {
    container.classList.remove("green-back", "pink-back", "yellow-back");
    container.classList.add("purple-back");
    currentPalette = 'purple-back';
    updateFooterBtnColor();
})

greenPallet.addEventListener("click", ()=> {
    container.classList.remove("pink-back", "purple-back", "yellow-back");
    container.classList.add("green-back");
    currentPalette = 'green-back';
    updateFooterBtnColor();
    
    
})

pinkPallet.addEventListener("click", ()=> {
    container.classList.remove("green-back", "purple-back", "yellow-back" );
    container.classList.add("pink-back");
    currentPalette = 'pink-back';
    updateFooterBtnColor();
    
})

yellowPallet.addEventListener('click', ()=> {
    container.classList.remove("green-back", "purple-back", "pink-back");
    container.classList.add("yellow-back");
    currentPalette = 'yellow-back';
    updateFooterBtnColor();
})

function updateFooterBtnColor() {
    let footerBtns = document.querySelectorAll('.footer-btn');
    footerBtns.forEach(btn => {
        btn.style.backgroundColor = colorMap[currentPalette].background;
        btn.style.color = colorMap[currentPalette].text;
    });
}



numBtns.forEach((numBtn)=> {
   numBtn.addEventListener("click", ()=> {
    display.value += numBtn.innerText;
    currentInput += numBtn.innerText;
    clear.innerText = "C"
    
   })
   
})

document.addEventListener('keydown', function(event) {
    if ((event.key >= '0' && event.key <= '9' )) {
        display.value += event.key;
        currentInput += event.key;
       clear.innerText = "C" 
    }
});

document.addEventListener('keydown', function(event) {
    if ((event.key === "+" || event.key === "-" || event.key === "/" || event.key === "*" || event.key === ".")) {
        display.value += event.key;
        currentInput += event.key;
       clear.innerText = "C" 
    }
});


document.addEventListener('keydown', function(event) {
    if ((event.key === "Backspace" )) {
        display.value = display.value.slice(0, display.value.length - 1);
        currentInput = display.value; 
    }
});

function clearLastCharaterDisplay() {
    display.value = display.value.slice(0, display.value.length - 1);
    currentInput = display.value;
}


document.addEventListener('keydown', function(event) {
    if ((event.key === "Delete" )) {
        currentInput = "";
    expression = [];
    display.value = "";
    clear.innerText = "AC"
    }
});

function clearDisplay() {
    currentInput = "";
    expression = [];
    display.value = "";
    clear.innerText = "AC"
}


function evaluateExpression(expressionstring) {
    'use strict';
     return eval(expressionstring);
}


document.addEventListener('keydown', function(event) {
    if ((event.key === "Enter")) {
        if(currentInput !== "") {
            expression.push(currentInput)
        }
    
        const fullExpression = expression.join(" ");
    
        display.value = evaluateExpression(fullExpression);
        currentInput = "";
        expression = []; 
    }
});

function calculate() {
    if(currentInput !== "") {
        expression.push(currentInput)
    }

    const fullExpression = expression.join(" ");

    display.value = evaluateExpression(fullExpression);
    currentInput = "";
    expression = [];
}









