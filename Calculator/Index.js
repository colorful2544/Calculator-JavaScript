let current = [];
let state = [];
let operator = '';
let before = 0;
let result = 0;

console.log(typeof current)

function PushNumber(number) {
    current.push(number);
    state.push(number);

    UpdateDisplay()
}

function PushOperator(operatorSome) {

    if(current.length != 0)
    {
        if(operator == '' && current.length != 0) {
            operator = operatorSome;
            state.push(operatorSome)
            before = parseFloat(current.join(""));
            current = [];
            UpdateDisplay();
        } 
        else if (result != 0) {
            state = [];
            if(parseFloat(current.join("")) != result) {
                result = parseFloat(current.join(""));
            }
            state.push(result);
            state.push(operatorSome);
            operator = operatorSome;
            before = result;
            result = 0;
            current = [];
    
            UpdateDisplay();
        }
    }
}

function PushDot() {
    if(!current.includes('.')) {
        current.push('.');
        state.push('.');
        UpdateDisplay();
    }
}

function DelNumber() {
    if(current.length != 0)
    {
        current.pop();
        state.pop();
        UpdateDisplay()
    }
}

function ClearCurrent() {
    current = [];
    state = [];
    operator = '';
    before = 0;
    result = 0;
    UpdateDisplay()
}

function Equal() {
    switch(operator) {
        case '+' : result = before + parseFloat(current.join(""));break;
        case '-' : result = before - parseFloat(current.join(""));break;
        case '*' : result = before * parseFloat(current.join(""));break;
        case '/' : result = before / parseFloat(current.join(""));break;
        default  : document.getElementsByClassName('number-current')[0].innerHTML = "Non operator";
    }
    current = [];

    current = result.toString().split("");

    UpdateCurrentDisplay();
}




function UpdateDisplay() {
    UpdateCurrentDisplay();
    UpdateStateDisplay();
}
function UpdateCurrentDisplay() {
    document.getElementsByClassName('number-current')[0].innerHTML = current.join("");
}
function UpdateStateDisplay() {
    document.getElementsByClassName('number-state')[0].innerHTML = state.join("");
}