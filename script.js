const display = document.getElementById('display');
let baseValue = null;

function clearDisplay() {
    display.value = '';
}

function addSymbol(symbol) {
    if (display.value === '0' && symbol !== '.') {
        display.value = symbol;
    } else {
        if (symbol === '×') {
            display.value += '×';
        } else if (symbol === '÷') {
            display.value += '÷';
        } else {
            display.value += symbol;
        }
    }
}

function calculateResult() {
    try {
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(expression);
        
        if (Number.isInteger(result)) {
            display.value = result;
        } else {
            display.value = result.toFixed(3);
        }
    } catch (error) {
        display.value = 'Error';
    }
}

const equalButton = document.querySelector('.equal');
equalButton.onclick = function() {
    if (baseValue !== null) {
        calculateExponentiation();
    } else {
        calculateResult();
    }
};

function calculatePercentage() {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const percentageValue = currentValue / 100;
        display.value = percentageValue;
    } else {
        display.value = 'Error';
    }
}

function toggleSign() {
    const display = document.querySelector('input[name="display"]');
    
    let currentValue = parseFloat(display.value);
    
    if (currentValue !== 0) {
        currentValue = currentValue * -1;
        display.value = currentValue;
    }
}
