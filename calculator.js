function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0){
        alert("You cannot divide by 0");
        return "You cannot divide by 0";
    }
    return a / b;
}

function operate(a, b, operator){
    if(operator === "+"){
        return add(a, b);
    }
    else if(operator === "-"){
        return subtract(a, b);
    }
    else if(operator === "*"){
        return multiply(a, b);
    }
    else{
        return divide(a, b);
    }
}

let numBtns = [];
let displayBot = document.querySelector(".bottom");
let displayTop = document.querySelector(".top");
let a = null;
let b = null;
let operator = null;
let flag = 0;

for(let i = 0; i <= 9; i++){
    let target = "#n" + i;
    let btn = document.querySelector(target);
    btn.addEventListener("click", () => {
        if(flag === 0){
            displayBot.textContent = "";
            flag = 1;
        }
        displayBot.textContent = displayBot.textContent + i;
    })
}

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    displayBot.textContent = "0";
    displayTop.textContent = "";
    flag = 0;
});

let deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", () => {
    displayBot.textContent = displayBot.textContent.slice(0,-1);
})

let equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    a = parseFloat(displayTop.textContent);
    b = parseFloat(displayBot.textContent);
    let result = operate(a, b, operator);
    if(typeof result === "string"){
        flag = 0;
        return;
    }
    displayBot.textContent = result;
    displayTop.textContent = displayTop.textContent + " " + b + " " + "=";
})

let addBtn = document.querySelector("#add");
addBtn.addEventListener("click", () => {
    operator = "+";
    displayTop.textContent = displayBot.textContent + " " + operator;
    flag = 0;
});

let subtractBtn = document.querySelector("#subtract");
subtractBtn.addEventListener("click", () => {
    operator = "-";
    displayTop.textContent = displayBot.textContent + " " + operator;
    flag = 0;
});

let timesBtn = document.querySelector("#times");
timesBtn.addEventListener("click", () => {
    operator = "*";
    displayTop.textContent = displayBot.textContent + " " + operator;
    flag = 0;
})

let divideBtn = document.querySelector("#divide");
divideBtn.addEventListener("click", () => {
    operator = "/";
    displayTop.textContent = displayBot.textContent + " " + operator;
    flag = 0;
})
